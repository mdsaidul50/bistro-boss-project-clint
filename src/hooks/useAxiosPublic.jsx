import axios from "axios";

const axiosesecure=axios.create({
    baseURL:"http://localhost:5000"
})

const useAxiosPublic = () => {
    return axiosesecure
       
};

export default useAxiosPublic;