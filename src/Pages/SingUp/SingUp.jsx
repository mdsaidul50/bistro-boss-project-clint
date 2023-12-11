import { useContext } from "react"
import { useForm } from "react-hook-form"
import { AuthContex } from "../../Provider/AuthProvider"
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

import Social from "../Home/Share/Social";

const SingUp = () => {
    const { register, handleSubmit, formState: { errors },} = useForm()
    const axiosesecure =useAxiosPublic()
    const {createsingup}=useContext(AuthContex)
    const navigate =useNavigate()
    const onSubmit = (data) =>{
     
     
      // console.log(data)
      createsingup(data.email,data.password)
      .then(result =>{
        console.log(result.user)

        const info= {
          name:data.name,
          email:data.email
        }
        axiosesecure.post("/users",info)
        .then(res=>{
          console.log(res)
        })
        navigate("/")
        
      })
      .catch(errors=>{
        console.log(errors)
      })
    }
    
    



    return (
        <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="name" {...register("name")} placeholder="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" {...register("email")} placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" {...register("password",{ required: true,minLength:6, maxLength:20 })}  placeholder="password" className="input input-bordered" required />
          {errors.password && <span>This field is required</span>}
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
     <Social></Social>
    </div>
   
  </div>
</div>
    );
};

export default SingUp;