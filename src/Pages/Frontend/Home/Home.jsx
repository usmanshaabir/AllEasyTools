import React from 'react';
import "../../../Scss/_home.scss";
import Button from 'react-bootstrap/Button';
import wordCounters from "../../../Assets/Images/word.png";
import arrow from "../../../Assets/Images/right-arrow.png";
import ageCalculator from "../../../Assets/Images/calculator.png";
import Password from "../../../Assets/Images/device.png";
import RecaptchaImage from "../../../Assets/Images/captcha.png";
import PdfToWord from "../../../Assets/Images/pdf.png";
import UppercaseToLowercase from "../../../Assets/Images/file.png";
import { useNavigate } from 'react-router-dom';

export default function Home() {

  const navigation = useNavigate()

  const handleWordCounter = () => {
    navigation('/wordcounter')
  }
  const handleAgeCalcultor = () => {
    navigation('/agecalcultor')
  }

  const handlePasswordGen = () => {
    navigation('/password')
  }

  const handleRecaptch = () => {
    navigation("recaptcha")
  }

  const handleUppercase = () => {
    navigation("convertletter")
  }
  const handlePdfToWord = () => {
    navigation("pdftoword")
  }
  // const handleApi = () => {
  //   navigation("api")
  // }



  return (
    < div className="bannarImage">
      <div className="container">
        <div className="row">
          <div className='d-flex justify-content-center mt-5 pt-5'>
            <Button size="sm" className='btn me-5 px-3 py-1 border-0 fs-6 fw-semibold rounded-pill' style={{ color: "#01B6BF", backgroundColor: "#E5FFF8" }}>Text Content Tools</Button>
          </div>
          <div className='text-center mt-4'>
            <h3>All Easy Tools in One Platform</h3>
          </div>
          <div className='text-center mt-2'>
            <p className='' style={{ color: "#5B5B5B" }}>Take advantage of our PDF tools to process digital documents with the highest quality results on every device and platform</p>
          </div>
        </div>
        {/* First Row (Word Counter, Age Calculater, Password Generater) */}
        <div className="row mt-5">
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card" style={{ width: "355px" }} onClick={handleWordCounter}>
              <div className="card-body d-flex p-4 justify-content-between align-items-center hover-effect rounded-2">
                <div className='d-flex align-items-center'>
                  <img src={wordCounters} className='me-2 mb-auto' style={{ width: "35px" }} alt="wordCounters not found" />
                  <div>
                    <h5 className="card-title">Word Counter</h5>
                    <p className="card-text">Count words effortlessly with our efficient Word Counter tool.</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <img src={arrow} alt="" style={{ width: "15px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card" style={{ width: "355px" }} onClick={handleAgeCalcultor}>
              <div className="card-body d-flex p-4 justify-content-between align-items-center hover-effect rounded-2">
                <div className='d-flex align-items-center'>
                  <img src={ageCalculator} className='me-2 mb-auto' style={{ width: "35px" }} alt="wordCounters not found" />
                  <div>
                    <h5 className="card-title">Age Calculator</h5>
                    <p className="card-text">Craft an age calculator using birthdate to reveal the current age.</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <img src={arrow} alt="" style={{ width: "15px" }} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4  mb-3 mb-sm-0">
            <div className="card" style={{ width: "355px" }} onClick={handlePasswordGen}>
              <div className="card-body d-flex p-4 justify-content-between align-items-center hover-effect rounded-2">
                <div className='d-flex align-items-center'>
                  <img src={Password} className='me-2 mb-auto' style={{ width: "35px" }} alt="Password logo not found" />
                  <div>
                    <h5 className="card-title">Password Generator</h5>
                    <p className="card-text">Generate strong  passwords with our Password Generator tool.</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <img src={arrow} alt="" style={{ width: "15px" }} />
                </div>
              </div>
            </div>
          </div>
          {/* ... (similar adjustments for other columns) */}
        </div>

        {/* First Row (ReCaptcha , PDF to Word  ) */}
        <div className="row mt-5">
          {/* ReCaptcha Generater */}
          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card" style={{ width: "355px" }} onClick={handleRecaptch}>
              <div className="card-body d-flex p-4 justify-content-between align-items-center hover-effect rounded-2">
                <div className='d-flex align-items-center'>
                  <img src={RecaptchaImage} className='me-2 mb-auto' style={{ width: "35px" }} alt="RecaptchaImage not found" />
                  <div>
                    <h5 className="card-title">ReCaptcha Generater</h5>
                    <p className="card-text">Generate ReCaptcha effortlessly with our efficient Generator tool.</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <img src={arrow} alt="" style={{ width: "15px" }} />
                </div>
              </div>
            </div>
          </div>

          {/* PDF to Word */}

          <div className="col-sm-4 mb-3 mb-sm-0">
            <div className="card" style={{ width: "355px" }} onClick={handlePdfToWord}>
              <div className="card-body d-flex p-4 justify-content-between align-items-center hover-effect rounded-2">
                <div className='d-flex align-items-center'>
                  <img src={PdfToWord} className='me-2 mb-auto' style={{ width: "35px" }} alt="PdfToWord not found" />
                  <div>
                    <h5 className="card-title">PDFs to Word</h5>
                    <p className="card-text">Create a tool that converts PDFs to Word documents.</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <img src={arrow} alt="" style={{ width: "15px" }} />
                </div>
              </div>
            </div>
          </div>

          {/* uppercase to lowercase */}

          <div className="col-sm-4  mb-3 mb-sm-0">
            <div className="card" style={{ width: "355px" }} onClick={handleUppercase}>
              <div className="card-body d-flex p-4 justify-content-between align-items-center hover-effect rounded-2">
                <div className='d-flex align-items-center'>
                  <img src={UppercaseToLowercase} className='me-2 mb-auto' style={{ width: "35px" }} alt="Uppercase To Lowercase logo not found" />
                  <div>
                    <h5 className="card-title">Uppercase To Lowercase</h5>
                    <p className="card-text">Craft a tool to convert uppercase text to lowercase with ease.</p>
                  </div>
                </div>
                <div className='mt-5'>
                  <img src={arrow} alt="" style={{ width: "15px" }} />
                </div>
              </div>
            </div>
          </div>

          {/* ... (similar adjustments for other columns) */}
        </div>
      </div>
    </div>
  );
}
