import React from 'react';
import "../Scss/_footer.scss"
import footerLogo from "../Assets/Images/FooterVector.svg"
import twitterLogo from "../Assets/Images/twitter.png"
import facebookLogo from "../Assets/Images/facebook.png"
import instragramLogo from "../Assets/Images/instagram.png"
import githubLogo from "../Assets/Images/github.png"

export default function Footer() {
  return (
    <>
      <div className='footer-background pb-5 '>
        <div className="container ">
          <div className="row ">
            <div className="col-md-4" >
              <div className='d-flex justify-content-center '>
                <div><img src={footerLogo} className='img-fluid' alt="footerLogo not found" /></div>
              </div>
              <div className='d-flex justify-content-center '>
                <div><h3>AllEasyTool</h3></div>
              </div>
              <p className='text-center'>Drop us a Line or Two , We are Open for Creative Minds and Collaborations!</p>
            </div>
            <div className="col-md-8" >
              <div class="card footer-card" style={{ boxShadow: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px" }}>
                <div class="card-body " >
                  <div className="row border-bottom ">
                    <div className="col-md-3">
                      <ul style={{ listStyleType: "none" }} className='text-for-center'>
                        <li className='mb-4 footerUlHead'>About</li>
                        <li>About Us</li>
                        <li>FAQ</li>
                        <li>Support</li>
                        <li>Team</li>
                      </ul>
                    </div>
                    <div className="col-md-3">
                      <ul style={{ listStyleType: "none" }} className='text-for-center'>
                        <li className='mb-4 footerUlHead'>Product</li>
                        <li>Word Counter</li>
                        <li>Password Generator</li>
                        <li>Age Calculator</li>
                        <li>XML to JSON</li>
                      </ul>
                    </div>
                    <div className="col-md-6 text-center ">
                      <ul style={{ listStyleType: "none" }}>
                        <li className='mb-4 footerUlHead'>Resources</li>
                        <li>Development Tutorial</li>
                        <li>How to - Blog</li>
                        <li>Youtube Playlist</li>
                      </ul>
                    </div>
                  </div>

                </div>
                <div className='text-end me-5 mb-3'>
                  <img src={twitterLogo} className='me-2' style={{ width: "20px" }} alt="twitterLogo not found" />
                  <img src={facebookLogo} className='me-2' style={{ width: "20px" }} alt="twitterLogo not found" />
                  <img src={instragramLogo} className='me-2' style={{ width: "20px" }} alt="twitterLogo not found" />
                  <img src={githubLogo} className='me-2' style={{ width: "20px" }} alt="twitterLogo not found" />
                </div>
              </div>
            </div>
            <div className='d-flex justify-content-between border-top mt-5' style={{ borderColor: "red" }}>
              <div>
                <p>&copy; Copyright 2022,All Rights Reserved by AllEasyTool</p>
              </div>
              <div>
                <span className='me-4'>Privacy Policy</span>
                <span>Terms of Use</span>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}