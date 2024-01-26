import React from 'react';
import "../../../Scss/_login.scss";
import Forget from "../../../Assets/Login/ForgetPassword.png";
import arrow from "../../../Assets/Login/arrow.png";
import { useNavigate } from 'react-router-dom';


export default function ForgetPassword() {
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate("/auth/login")
  }

  return (
    <div className="container-fluid ">
      <div className="row ">
        <div className="col-md-6 mt-5 pt-5">
          <img src={Forget} className='img-fluid' alt="login" />
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center mt-5 pt-5">
          <div>
            <h2>Forgot Password?</h2>
            <h5 className='text-center'>No worries, we’ll send you reset instructions.</h5>
            <div className='mt-5 pt-3'>
              <input type="email" class="form-control mt-4 emailStyle" placeholder="Email" />
            </div>
            <div class="d-grid gap-2 mt-5">
              <button class="btn text-light " style={{ background: "linear-gradient(90deg, #00B887 0%, #01B6D3 100%)" }} type="button">Reset Password</button>
              <p className='text-end forgetClass mt-3' style={{ cursor: "pointer" }} onClick={handleLogin}><img src={arrow} alt="" />Back to Login</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

