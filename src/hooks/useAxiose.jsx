import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const axiosesecure =axios.create({
    baseURL:"http://localhost:5000"
})

const useAxiose = () => {
    const {logout}=useAuth()
    const navigate =useNavigate()
     axiosesecure.interceptors.request.use(function(config){
        const token =localStorage.getItem("access-token")
        console.log("request stopped by interceptors",token);
        config.headers.authorization =`bearer ${token}`;
        return config;
     }, function(error){
        //do something with requst error
        return Promise.reject(error);
     });
     //intercepts 401 and 403 status
     axiosesecure.interceptors.response.use(function(response){
        return response;
     }, async(error)=>{
        const status =error.response.status;
        console.log("status error in the interceptor",status)
        if(status ===401 || status ===403){
            await logout();
            navigate('/login')

        }
        return Promise.reject(error);
     })


     return axiosesecure
};

export default useAxiose;