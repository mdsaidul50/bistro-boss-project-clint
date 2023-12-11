
import useAxiosPublic from './useAxiosPublic';
import { useQuery } from 'react-query';

const useMenu = () => {

    const axiosPublic =useAxiosPublic()
    // const [item, setitem]=useState([])
    // const [loading, setloading]=useState(true)
    // useEffect(()=>{
    //     fetch("http://localhost:5000/menu")
    //     .then(res =>res.json())
    //     .then(data=>{
            
    //         setitem(data)
    //         setloading(false)
    //     })
    // },[])
    const {data: item =[],isPending:loading,refetch} =useQuery({
        queryKey:["menu"],
        queryFn:async()=>{
            const res= await axiosPublic.get("/menu");
            return res.data;
        }
    })
   


    return [item, loading,refetch]
      
}

export default useMenu;