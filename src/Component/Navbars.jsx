import React from 'react';
import logoImage from "../Assets/Images/Vector.png"
import { Link } from 'react-router-dom';

export default function Navbars() {


  return (
    <>
      <nav className="navbar navbar-expand-lg bg-[#5BB87B] navbar-dark" style={{ backgroundColor: "#5BB87B" }}>
        <div className="container">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <div className="navbar-nav mx-auto mb-2 mb-lg-0">
              <div className='me-2'>
                <img src={logoImage} alt="logoImage not found" />
              </div>
              <div>
                <p className='mb-0'><span className='fw-bold'>Are you in need of help?</span>  We are here to help you</p>
              </div>
            </div>
            <div>
              <Link to="auth/login" className="btn btn-light me-3">Sign up</Link>
              <Link to="" className="btn btn-light">Login up</Link>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
