import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiose from "../../hooks/useAxiose";
import useCard from "../../hooks/useCard";


const FoodCard = ({item}) => {
    const{ image,price,recipe,name,_id}=item;

    const [,refetch]=useCard()
    const {user}=useAuth()
    const axiosesecure =useAxiose()
    const navigate =useNavigate()
    const location = useLocation()
    const addhendel =(food)=>{
        // console.log(food,user.email);
        if(user && user.email){
           const cardItem = {
            menuID :_id,
            email:user.email,
            name,
            image,
            price
           } 
           axiosesecure.post("/card",cardItem)
           .then(res=>{
            console.log(res.data)
            if(res.data.insertedId){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
                 
            }
           })
        }
        else{
            Swal.fire({
                title: "you are not a login",
                text: "please login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate("/login",{state:{from:location}})
                }
              });
        }
    }
    return (
        <div>
            <div className="card  bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                <p>price: ${price}</p>
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    
                    <div className="card-actions">
                    <button onClick={()=>addhendel(item)} className="btn btn-outline btn-primary border-0 border-b-2">ADD TO CARD</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;