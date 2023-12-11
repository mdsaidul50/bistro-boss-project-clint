import { useQuery } from "react-query";
import useAxiose from "./useAxiose";
import useAuth from "./useAuth";


const useCard = () => {
    const {user}=useAuth()
//    tan stack query
const axiosesecure =useAxiose()
const {refetch, data:card =[]}=useQuery({
    queryKey:["card",user?.email],
    queryFn:async()=>{
        const res =await axiosesecure.get(`/card?email=${user.email}`)
        return res.data;
    }

})
return [card,refetch]
};

export default useCard;