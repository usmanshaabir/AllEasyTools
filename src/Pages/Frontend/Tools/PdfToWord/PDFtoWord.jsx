import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import PDFTOWord from "../../../../Assets/Images/PFD.png"
import ArrowButton from "../../../../Assets/Images/chevron-down.png"

export default function ConvertLetter() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    // Update state with the selected file
    setSelectedFile(event.target.files[0]);
  };

  const handleConvertClick = () => {

  };


  return (
    <>
      <div className="container">
        <div className="row mt-5 pt-5">
          <h2>PDF To Word</h2>
          <div class="mt-3 mb-5">
            <div className='text-center pdf-background' style={{ padding: "55px 0px" }}>
              <img src={PDFTOWord} alt="PDFTOWord logo" />
              <h5>Upload a File to Convert</h5>
              <p>Drag and drop to Upload or Click the button</p>
              <label className="btn btn-success"> Choose PDF File
                <img src={ArrowButton} className='ms-2' alt="ArrowButton not found" />
                <input type="file" className="d-none" id="fileInput" onChange={handleFileChange} />
              </label>

            </div>
            <div className='text-end mt-5'>
              <Button variant="success" style={{ width: "12%" }} onClick={handleConvertClick} >Convert to Word</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <h3>Try Other AllEasyTool</h3>
          <div className='d-flex mb-5 mt-4'>
            <Button className='me-3 border-0 rounded-pill' style={{ background: "rgba(91, 184, 123, 0.08)", color: "#5BB87B" }}>Word Counter</Button>
            <Button className='me-3 border-0 rounded-pill' style={{ background: "rgba(91, 184, 123, 0.08)", color: "#5BB87B" }}>Age Calculator</Button>
            <Button className='me-3 border-0 rounded-pill' style={{ background: "rgba(91, 184, 123, 0.08)", color: "#5BB87B" }}>Uppercase To Lowercase</Button>

          </div>
        </div>
      </div>
    </>
  )
}

