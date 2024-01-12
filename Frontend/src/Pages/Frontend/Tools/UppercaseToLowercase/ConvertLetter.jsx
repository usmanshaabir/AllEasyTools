import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Tick from '../../../../Assets/Images/checked.png';

export default function ConvertLetter() {
  const [state, setState] = useState({ text: " " })
  const [isApploading, setIsApploading] = useState(true)

  function handleChange(event) {
    setState((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }
  // LowerCase
  const handleLowercase = () => {
    const lowercase = state.text.toLowerCase()
    setState((prevState) => ({ ...prevState, text: lowercase }));
  }
  // Capitalize Word
  const handleCapitalize = () => {
    const capitalizedText = state.text.charAt(0).toUpperCase() + state.text.slice(1).toLowerCase()
    console.log("capitalizedText", capitalizedText);
    setState(prevState => ({ ...prevState, text: capitalizedText }));
  }
  // Capitalize First Letter of Each Sentence
  const handleSentenceCase = () => {
    const smallWord = state.text.toLowerCase()
    const sentences = smallWord.split(/(?<=[.!?])\s+/);
    const sentenceCaseText = sentences.map(sentence => sentence.charAt(0).toUpperCase() + sentence.slice(1)).join(' ');

    setState(prevState => ({ ...prevState, text: sentenceCaseText }));
  }

  // UpperCase
  const handleUppercase = () => {
    const uppercase = state.text.toUpperCase()
    setState((prevState) => ({ ...prevState, text: uppercase }));
  }
  // Toggle Case
  const handleToggleCase = () => {
    const toggledText = state.text.split('').map(char => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
    setState(prevState => ({ ...prevState, text: toggledText }));
  }
  // CopyWord Case
  const handleCopy = () => {
    const allWord = document.getElementById("textChange")
    allWord.select()
    document.execCommand("copy")
    setIsApploading(false)

    setTimeout(() => {
      setIsApploading(true)
    }, 1500)

  }


  return (
    <>
      <div className="container">
        <div className="row mt-5 pt-5">
          <h2>Uppercase To Lowercase</h2>
          <div class="mt-3 mb-5">
            <textarea class="form-control dotted-border" value={state.text} name='text' id="textChange" rows="10" placeholder="Type something..." onChange={handleChange}></textarea>
            <div className='text-end mt-4'>
              <Button variant="success" style={{ width: "12%" }} onClick={handleCopy}>{isApploading ? "Copy to Clipboard" : <img src={Tick} alt='Tick logo' />}</Button>
            </div>
          </div>
        </div>
        <div className="row">
          <h3>Character Count</h3>
          <div className='d-flex mb-5'>
            <Button className='me-3' variant="success" onClick={handleToggleCase}>tOGGLE cASE</Button>
            <Button className='me-3' variant="success" onClick={handleSentenceCase}>Sentence Case</Button>
            <Button className='me-3' variant="success" onClick={handleLowercase}>lower case</Button>
            <Button className='me-3' variant="success" onClick={handleUppercase}>UPPER CASE</Button>
            <Button variant="success" onClick={handleCapitalize}>Capitalize Word</Button>
          </div>
        </div>
      </div>
    </>
  )
}
