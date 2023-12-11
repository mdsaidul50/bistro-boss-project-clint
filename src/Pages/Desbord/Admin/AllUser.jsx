import { useQuery } from "react-query";

import useAxiose from "../../../hooks/useAxiose";
import {  FaTrashAlt, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";



const AllUser = () => {
    const axiosesecure =useAxiose()
    
    
    const {refetch, data:users=[]}=useQuery({
        queryKey:["users"],
        queryFn:async()=>{
            const res=await axiosesecure.get("/users");
            return res.data
        }   
    })
    const adminhendel=(user)=>{
        axiosesecure.patch(`/users/admin/${user._id}`)
        .then(res=>{
            console.log(res.data)
            if(res.data.modifiedCount>0){
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${user.name} admin now`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        })
    }

    const deletehendel=(user)=>{

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

                axiosesecure.delete(`/users/${user._id}`)
                .then(res=>{
                    console.log(res)
                    if(res.data.deletedCount >0){
                        refetch();
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
            <h2 className="text-2xl">All Users</h2>
            <h2 className="text-2xl">total users:{users.length}</h2>
          </div>

          {/* table */}
          <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Role</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,index)=><tr  key={user._id}>
            <th>{index+1}</th>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
            {
                user.role ==="admin"?"admin":
                <button  className="btn btn-ghost btn-xs"><FaUser onClick={()=>adminhendel(user)}></FaUser></button>
            }
            </td>
            <td>
            <button  className="btn btn-ghost btn-xs"><FaTrashAlt onClick={()=>deletehendel(user)}></FaTrashAlt></button>
            </td>
          </tr>)
      }
      
      
      
    </tbody>
  </table>
</div>
        </div>
    );
};

export default AllUser;