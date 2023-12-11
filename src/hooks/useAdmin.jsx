import { useQuery } from "react-query";
import useAuth from "./useAuth";
import useAxiose from "./useAxiose";


const useAdmin = () => {
   const {user}=useAuth()
   const axiosesecure=useAxiose();
   const {data : isAdmin, isLoading:isLoading}=useQuery({
      queryKey:[user?.email,"isAdmin"],
      queryFn:async()=>{
         const res =await axiosesecure.get(`/users/admin/${user.email}`);
         console.log(res.data)
         return res.data?.admin;
      }
   })
   return [isAdmin,isLoading]
};

export default useAdmin;