/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {
    const location=useLocation()
    const {user,loadding}=useAuth()
    const [isAdmin,isLoading]=useAdmin()
    if(loadding ||isLoading){
        return(<span className="loading loading-spinner loading-xs"></span>)
    }
    if(user && isAdmin){
       return children
    }
    return <Navigate to='/login' state={{from:location}} replace></Navigate>
};


export default AdminRoute;