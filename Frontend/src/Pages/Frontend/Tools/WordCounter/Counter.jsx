import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
// import { Worker, Viewer } from '@react-pdf-viewer/core';
// import { pdfjs } from 'pdfjs-dist';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Counter() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState(0);
  const [sentenceCount, setSentenceCount] = useState(0);
  const [characterCount, setCharacterCount] = useState(0);
  const [copyRight, setCopyRight] = useState(true)

  const handleInputChange = (e) => {
    const newText = e.target.value;
    setText(newText);
    updateCounts(newText);
  };

  // const handleFileUpload = (e) => {
  //     const file = e.target.files[0];

  //     if (file) {
  //         const reader = new FileReader();

  //         reader.onload = async (event) => {
  //             const fileDataArrayBuffer = event.target.result;
  //             const fileDataUint8Array = new Uint8Array(fileDataArrayBuffer);

  //             setText(fileDataUint8Array);
  //         };

  //         reader.readAsArrayBuffer(file);
  //     }
  // };



  const handlePaste = (e) => {
    const pastedText = e.clipboardData.getData('text');
    setText(pastedText);
    updateCounts(pastedText);
  };

  const updateCounts = (newText) => {
    // Count words
    const words = newText.match(/\b\w+\b/g) || [];
    setWordCount(words.length);

    // Count sentences (simple logic: count sentences ending with ".", "!", "?")
    const sentences = newText.split(/[.!?]/).filter(Boolean);
    setSentenceCount(sentences.length);

    // Total Characters Count
    const removeSpace = newText.replace(/\s/g, '');
    const character = removeSpace.length;
    setCharacterCount(character);
  };

  // clear button
  const handleClear = () => {
    setText('');
    setWordCount(0);
    setSentenceCount(0);
    setCharacterCount(0);
  };
  const handleCopy = () => {
    // Create a temporary textarea element
    const textarea = document.createElement('textarea');

    // Set the value of the textarea to the current text
    textarea.value = text;

    // Append the textarea to the document
    document.body.appendChild(textarea);

    // Select the text in the textarea
    textarea.select();

    // Execute the copy command
    document.execCommand('copy');

    // Remove the textarea from the document
    document.body.removeChild(textarea);


    showToast("Copied to Clipboard!");

    setCopyRight(false);
    setTimeout(() => {
      setCopyRight(true);
    }, 2000);
  };

  const showToast = (text) => {
    toast(text, {
      position: "bottom-right", // You can adjust the position as needed
      autoClose: 2000, // Time in milliseconds before the toast auto-closes
      hideProgressBar: true, // Display or hide the progress bar
      closeOnClick: true, // Close the toast when clicked
      pauseOnHover: true, // Pause the timer when hovered
      draggable: true, // Make the toast draggable
      progress: undefined, // Disable or set the progress bar value

      // Custom style for the toast, including background color
      style: {
        backgroundColor: "#50C878", // Set your desired background color
        color: "#FFF"
      },
    });
  };

  return (
    <div>
      <div className="container">
        <div className="row mt-5 pt-5  ">
          <div className='d-flex justify-content-between'>
            <div>
              <h4>Word Counter</h4>
            </div>
            <div>
              <p>{characterCount} / 1000 Characters</p>
            </div>
          </div>
          <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="9" value={text} onChange={handleInputChange} onPaste={handlePaste}></textarea>
            {/* <input className="form-control w-25 mt-1" accept='.pdf,.txt' type="file" onChange={handleFileUpload} /> */}
          </div>
        </div>
        <div className="row mt-5 ">
          <h4>Live Tracking</h4>
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div className="card-body p-3 ">
                <p className='text-center mb-0'>Total Word Count : <span className='fw-bold' style={{ color: "#00B887" }}>{wordCount}</span></p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div className="card-body p-3 ">
                <p className='text-center mb-0'>Total Characters Count : <span className='fw-bold' style={{ color: "#00B887" }}>{characterCount}</span></p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3 mb-sm-0">
            <div className="card" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
              <div className="card-body p-3 ">
                <p className='text-center mb-0'>Total Sentences Count : <span className='fw-bold' style={{ color: "#00B887" }}>{sentenceCount}</span></p>
              </div>
            </div>
          </div>
          <div className="col-sm-3 mb-3 mb-sm-0 mt-1">
            <Button variant="danger" className='btn-lg me-3' onClick={handleClear}>Clear</Button>
            <Button variant="success w-25" className='btn-lg' onClick={handleCopy}>{copyRight ? "Copy" : <span>&#10003;</span>}</Button>
          </div>
        </div>
        {/* for Pdf paste input flied */}
        {/* {typeof text === 'object' && text instanceof Uint8Array && (
                    <div className="row mt-5">
                        <h4>PDF Viewer</h4>
                        <div className="mb-3">
                            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                                <Viewer fileUrl={{ data: text, format: 'Uint8Array' }} />
                            </Worker>

                        </div>
                    </div>
                )} */}
      </div>
      <ToastContainer />
    </div>
  );
}

