import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import Lottie from "lottie-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginAnimation from '../../../src/assets/login1735833826.json'
import { AuthContext } from '../../components/Providers/AuthProvider';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
const Login = () => {
  const captchaRef=useRef(null);
  const [disabled,setdisabled]=useState(true)
  const navigate=useNavigate()
  const {loginUser}=useContext(AuthContext)
  useEffect(()=>{
    loadCaptchaEnginge(4); 

  })

  const location=useLocation();
  const from= location.state || '/'
  console.log(from)

    const handleloginSubmit=(e)=>{
        e.preventDefault()
          const form=e.target;
          const email=form.email.value;
          const password=form.password.value;
          console.log(email,password)
          loginUser(email,password)
          .then((credential)=>{
            const user=credential.user;
          })
          .catch((error)=>{
            console.log(error)
          })
          form.reset();
          navigate(`${from}`)
    }
    const handleValidate=()=>{
         const value=captchaRef.current.value;
         if(validateCaptcha(value)==true){
          setdisabled(false)
         }
         else{
           setdisabled(true)
         }
    }
    
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
          <Lottie animationData={loginAnimation} loop={true}></Lottie>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleloginSubmit}>
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
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control">
                <label className="label">
                <LoadCanvasTemplate />
                </label>
                <input ref={captchaRef} type="text" name="captcha" placeholder="type above text" className="input input-bordered" required />
              </div>
              <button type='button' onClick={handleValidate} className='btn btn-info py-5 text-white'>Validate</button>

              <div className="form-control mt-6">
                <input type="submit" value='Login' disabled={disabled} className="bg-purple-500 btn btn-primary" />

              </div>
            </form>
            <div>
              <p>New Here? <Link to='/register'>Register</Link></p>
              <p><SocialLogin></SocialLogin></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;