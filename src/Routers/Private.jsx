/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Private = ({children}) => {
    const location=useLocation()
    const {user,loadding}=useAuth()
    if(loadding){
        return(<span className="loading loading-spinner loading-xs"></span>)
    }
    if(user){
       return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};

export default Private;