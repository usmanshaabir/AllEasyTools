import React from 'react';
import "../../../Scss/_login.scss";
import loginImage from "../../../Assets/Login/Login.png";
import google from "../../../Assets/Login/google.png";
import { useNavigate } from 'react-router-dom';


export default function LoginPage() {
  const navigate = useNavigate()

  const handleForget = () => {
    navigate("/auth/forget")
  }
  const handleSignup = () => {
    navigate("/auth/signup")
  }



  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-md-6 mt-5 pt-5">
          <img src={loginImage} className='img-fluid' alt="login" />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 pt-5">
          <div>
            <h2>Welcome to <span style={{ color: "#00B887" }}>All Easy Tool</span></h2>
            <h5 className='text-center'>Account</h5>
            <div className='mt-5 pt-3'>
              <input type="email" class="form-control mt-4 emailStyle" placeholder="Email" />
              <input type="text" class="form-control mt-4 passwordStyle" placeholder="Password" />
              <p className='text-end forgetClass mt-3' onClick={handleForget} style={{ cursor: "pointer" }}>Forgot password?</p>
            </div>
            <div class="d-grid gap-2 mt-5">
              <button class="btn text-light " style={{ background: "linear-gradient(90deg, #00B887 0%, #01B6D3 100%)" }} type="button">Login</button>
              <p className='text-center mb-0 mt-4' style={{ color: "#828282" }}>Don't have an account? Setup now</p>
              <button class="btn" style={{ borderColor: "#00B887", color: "#00B887" }} onClick={handleSignup}>Create Account</button>
              <p className='text-center mb-0'>Or</p>
              <button class="btn btn-light" type="button" style={{ backgroundColor: "#D4D4D4" }}> <img src={google} alt="" /> Sign in with Google</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

