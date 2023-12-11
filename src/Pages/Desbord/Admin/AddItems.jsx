import { useForm } from "react-hook-form";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiose from "../../../hooks/useAxiose";
import Swal from "sweetalert2";

const img_hosting_key = "7d17d42af42c4a72f52e800502852e81";
const img_hosting_api=`https://api.imgbb.com/1/upload?key=${img_hosting_key}`

const AddItems = () => {
    const axiosPublic= useAxiosPublic()
    const axiosesecure =useAxiose()
    const { register, handleSubmit,reset } = useForm()
    const onSubmit = async(data) => {
        
        const imagefile ={image: data.image[0]}
        const res =await axiosPublic.post(img_hosting_api,imagefile,{
            headers:{
                'content-type': 'multipart/form-data'
            }
        });
        if(res.data.success){
            const menuitem ={
                name:data.name,
                category:data.catagory,
                price:parseFloat(data.price),
                recipe:data.area,
                image:res.data.data.display_url
            }
            const menures= await axiosesecure.post("/menu", menuitem);
            console.log(menures.data)
            if(menures.data.insertedId){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Your work has been saved",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
        }

        console.log(res.data)
        
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">name</span>
                    </label>
                    <input type="name" {...register("name", { required: true })} placeholder="name" className="input input-bordered" required />
                </div>
               <div className="flex gap-6 mt-7 items-center">
               
               <div className="form-control">
                    <label className="label">
                        <span className="label-text">catagory</span>
                    </label>
                    <select defaultValue="" className="select border-4 border-gray-700  w-full max-w-xs" {...register("catagory", { required: true })}>
                    <option disabled value="">select catagory show?</option>
                    <option value="salad">salad</option>
                    <option value="pizza">pizza</option>
                    <option value="soup">soup</option>
                    <option value="derink">derink</option>
                    <option value="dessert">dessert</option>
                </select>
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">price</span>
                    </label>
                    <input type="number" {...register("price", { required: true })} placeholder="email" className="input input-bordered" required />
                </div>
               </div>
               <textarea className="textarea mt-7 w-full textarea-warning" {...register("area", { required: true })} placeholder="Bio"></textarea>
               <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-primary w-full max-w-xs mt-7" />
                <br></br>
               <button className="mt-7 btn btn-primary">Add item</button>
            </form>
        </div>
    );
};

export default AddItems;