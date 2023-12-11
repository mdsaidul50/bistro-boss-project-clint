import { FaTrashAlt } from "react-icons/fa";
import Section from "../../../Component/section/Section";
import useMenu from "../../../hooks/usemenu";
import Swal from "sweetalert2";
import useAxiose from "../../../hooks/useAxiose";



const ManageItem = () => {
    const axiosesecure =useAxiose()
    const [item, ,refetch]=useMenu()
    

    const deletehendel =(item)=>{
        console.log(item)
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
             const res = axiosesecure.delete(`/menu/${item._id}`)
                console.log(res.data)
                // if(res.data.deletedCount >0){
                //     refetch()
                //     Swal.fire({
                //         title: "Deleted!",
                //         text: "Your file has been deleted.",
                //         icon: "success"
                //       });
                // }
            

            }
          });

    }

    return (
        <div>
            <Section subheading="Check it out" heading="FROM OUR MENU"></Section>
        
        {/* ..//table */}
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          #
           
        </th>
        <th>Image</th>
        <th>Name</th>
        <th>Price</th>
        <th>Updata</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
        {
            item.map((items,index)=> <tr key={items._id}>
                <th>
                  {index+1}
                </th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img src={items.image} alt="Avatar Tailwind CSS Component" />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                 {items.name}
                </td>
                <td>{items.price}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Updata</button>
                </th>
                <th>
                <button onClick={()=>deletehendel(items._id)} className="btn btn-ghost btn-xs"><FaTrashAlt ></FaTrashAlt></button>
                </th>
              </tr>
              )
        }

     
      
     
    </tbody>
    
    
  </table>
</div>

        </div>
    );
};

export default ManageItem;