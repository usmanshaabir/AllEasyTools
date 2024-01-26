import React from 'react';
import "../../../Scss/_login.scss";
import loginImage from "../../../Assets/Images/login.png";
import google from "../../../Assets/Login/google.png";
import { useNavigate } from 'react-router-dom';


export default function SignupPage() {
    const navigate = useNavigate()

    const handleLogin = () => {
        navigate("/auth/login")
    }

    return (
        <div className="container-fluid ">
            <div className="row ">
                <div className="col-md-6 mt-5 pt-5">
                    <img src={loginImage} className='img-fluid' alt="login" />
                </div>

                <div className="col-md-6  d-flex justify-content-center align-items-center mt-5 pt-5">
                    <div>
                        <h2>Get started with <span style={{ color: "#00B887" }}>All Easy Tool</span></h2>
                        <h5 style={{ color: "#929292" }}> Sign up to your profile below</h5>
                        <div>
                            <input type="name" class="form-control mt-5 personStyle" placeholder="First Name" />
                            <input type="name" class="form-control mt-4 personStyle" placeholder="Last Name" />
                            <input type="number" class="form-control mt-4 numberStyle" placeholder="Phone Number" />
                            <input type="email" class="form-control mt-4 emailStyle" placeholder="Email" />
                            <input type="text" class="form-control mt-4 passwordStyle" placeholder="Password" />
                            <input type="text" class="form-control mt-4 passwordStyle" placeholder="Confirm Password" />
                        </div>
                        <div class="form-check mt-4">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label class="form-check-label" for="flexCheckDefault">
                                I agree to the terms and conditions.
                            </label>
                        </div>
                        <div class="form-check mt-3">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckChecked" />
                            <label class="form-check-label" for="flexCheckChecked">
                                I’m not Robot
                            </label>
                        </div>
                        <div class="d-grid gap-2 mt-5">
                            <button class="btn text-light " style={{ background: "linear-gradient(90deg, #00B887 0%, #01B6D3 100%)" }} type="button">Sign Up</button>
                            <p className='text-center mb-0'>Or</p>
                            <button class="btn btn-light" type="button" style={{ backgroundColor: "#D4D4D4" }}> <img src={google} alt="" /> Sign in with Google</button>
                        </div>
                        <p className='text-center mb-0 mt-3'>Alraedy have account? <span className='fw-bold' style={{ color: "#00B887", cursor: "pointer" }} onClick={handleLogin}  >Log In</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

