import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { pdfjs } from 'pdfjs-dist';
import '@react-pdf-viewer/core/lib/styles/index.css';

export default function Counter() {
    const [text, setText] = useState('');
    const [wordCount, setWordCount] = useState(0);
    const [sentenceCount, setSentenceCount] = useState(0);
    const [characterCount, setCharacterCount] = useState(0);

    const handleInputChange = (e) => {
        const newText = e.target.value;
        setText(newText);
        updateCounts(newText);
    };

    const handleFileUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = async (event) => {
                const fileText = event.target.result;
                setText(fileText);
                updateCounts(fileText);
            };
            reader.readAsText(file);
        }
    };

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
                        <input className="form-control w-25 mt-1" accept='.pdf,.txt' type="file" onChange={handleFileUpload} />
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
                        <Button variant="danger" className='btn-lg' onClick={handleClear}>Clear</Button>
                    </div>
                </div>
                {text && text.includes('.pdf') && (
                    <div className="row mt-5">
                        <h4>PDF Viewer</h4>
                        <div className="mb-3">
                            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`}>
                                <Viewer fileUrl={text} />
                            </Worker>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

