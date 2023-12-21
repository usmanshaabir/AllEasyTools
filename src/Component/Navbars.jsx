import React from 'react';
import logoImage from "../Assets/Images/Vector.png"

export default function Navbars() {
  return (
    <>
      <nav class="navbar navbar-expand-lg bg-[#5BB87B] navbar-dark" style={{ backgroundColor: "#5BB87B" }}>
        <div class="container">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <div class="navbar-nav mx-auto mb-2 mb-lg-0">
              <div className='me-2'>
                <img src={logoImage} alt="logoImage not found" />
              </div>
              <div>
                <p className='mb-0'><span className='fw-bold'>Are you in need of help?</span>  We are here to help you</p>
              </div>
            </div>
            <div>
              <button type="button" class="btn" data-bs-toggle="button">Location</button>
              <button type="button" class="btn" data-bs-toggle="button">Contact Us</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}
