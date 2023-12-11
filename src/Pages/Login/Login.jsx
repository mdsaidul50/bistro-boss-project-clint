import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { AuthContex } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Login = () => {

    const refCaptcha = useRef(null)
    const [disable, setDisable]=useState(true)

    const location = useLocation()
    const {userlogin}=useContext(AuthContex)
    const navigate =useNavigate()

    const from =location.state?.from?.pathname ||"/"
    useEffect(()=>{
        loadCaptchaEnginge(6);

    },[])

    const loginheandel =(e)=>{
         e.preventDefault()
         const form = e.target
         const email = form.email.value;
         const password =form.password.value;
         console.log(email,password)
         userlogin(email,password)
         .then(result=>{
          console.log(result.user)
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          navigate(from,{replace:true})
         })
    }

    const validedHendel =()=>{
        const user_captcha_value= refCaptcha.current.value;
        console.log(user_captcha_value)
        if(validateCaptcha(user_captcha_value)){
            setDisable(false)
        }
        else{
            setDisable(true)
        }
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={loginheandel} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input onBlur={validedHendel}  type="text" ref={refCaptcha} name="captcha" placeholder="type the text above" className="input input-bordered" />
                
              </div>
              <div  className="form-control mt-6">
                <button disabled={false} className="btn btn-primary">Login</button>
              </div>
            </form>
            <p>New here? <Link to={"/singup"} className='text-orange-400'>Create a New Account</Link></p>
          </div>
        </div>
      </div>
    );
};

export default Login;