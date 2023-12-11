import { FaGoogle } from "react-icons/fa";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Social = () => {
    const {google}=useAuth()
    const navigate =useNavigate()
    const axiosPublic = useAxiosPublic()

    const googleHendle=()=>{
        google()
        .then(res =>{
            console.log(res)
             const info ={
                email:res.user?.email,
                name:res.user?.displayName
             }

             axiosPublic.post("/users",info)
             .then(res=>{
                console.log(res)
             })

            navigate("/")
        })
        

    }

    return (
        <div className="m-6">
             <button onClick={googleHendle} className="btn btn-active btn-neutral"><FaGoogle></FaGoogle> Google</button>
        </div>
    );
};

export default Social;