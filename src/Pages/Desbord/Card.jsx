import { FaTrashAlt } from "react-icons/fa";
import useCard from "../../hooks/useCard";
import Swal from "sweetalert2";
import useAxiose from "../../hooks/useAxiose";


const Card = () => {
    const [card,refetch]=useCard()
    const totalprice =card.reduce((total,item)=>total+item.price,0)
    
    const axiosesecure= useAxiose()

    const deletehendel=id=>{
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {

            axiosesecure.delete(`/card/${id}`)
            .then(res=>{
                console.log(res)
                if(res.data.deletedCount >0){
                  refetch()
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                 
                }
                
            })
         
        }
      });

    }
    return (
        <div>
           <div className="flex justify-evenly">
            <h2 className="text-2xl">items:{card.length}</h2>
            <h2 className="text-2xl">total price:{totalprice}</h2>
            <button className="btn btn-circle">pay</button>
           </div>

        {/* table  */}

        <div className="overflow-x-auto">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         #
        </th>
        <th>image</th>
        <th>name</th>
        <th>price</th>
        <th>active</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        card.map((item,index)=><tr key={item._id}>
            <th>
              {index+1}
            </th>
            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={item.image} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                
              </div>
            </td>
            <td>
             {item.name}
            </td>
            <td>{item.price}</td>
            <th>
              <button onClick={()=>deletehendel(item._id)} className="btn btn-ghost btn-xs"><FaTrashAlt ></FaTrashAlt></button>
            </th>
          </tr>)
      }
      
      
      
     
      
    </tbody>
    
   
    
  </table>
</div>

        </div>
    );
};

export default Card;