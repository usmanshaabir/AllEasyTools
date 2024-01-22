import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateRecaptch() {
  const [state, setState] = useState("hgj12HG")
  const [checkRecaptcha, setCheckRecaptcha] = useState({ writeCaptacha: "" })
  const [checkInput, setCheckInput] = useState(null)

  const handleRecaptcha = () => {
    const random = Math.random().toString(36).slice(6)
    setState(random)
    console.log("random", random);
  }
  const handleChange = (event) => {
    setCheckRecaptcha((prevState) => ({ ...prevState, [event.target.name]: event.target.value }))
  }

  const handleDone = () => {
    console.log("state", state);
    console.log("checkRecaptcha", checkRecaptcha.writeCaptacha);
    if (state === checkRecaptcha.writeCaptacha) {
      setCheckInput(false)
      toast("Thats Great❤️.")
      console.log("ok")
    } else {
      setCheckInput(true)
      console.log(" not ok")

    }
  }

  return (
    <>
      <div className="container mb-5">
        <div className="row mt-5 pt-5">
          <h2>Recaptcha</h2>
          <Card className='pt-3'>
            <Card.Body className='text-center'>Help us enhance online security by completing this quick and simple reCAPTCHA challenge. Your contribution ensures a safer online experience for everyone!
              <div className='d-flex  justify-content-center mt-5 '>
                <input type="text" value={state} className="form-control w-25" />
                <Button variant="primary" className="ms-3 " style={{ width: "16%" }} onClick={handleRecaptcha}>Generate Recaptcha</Button>
              </div>
              <div className='d-flex  justify-content-center mt-5'>
                <input type="text" name='writeCaptacha' className="form-control w-25" onChange={handleChange} />
                <Button variant="success" className="ms-3" style={{ width: "16%" }} onClick={handleDone}>Done Recaptcha</Button>
              </div>
            </Card.Body>
            {checkInput ? <p className='text-danger' style={{ paddingLeft: "29%" }}> please write correct Recaptach </p> : ""}
          </Card>
        </div>
        <ToastContainer />
      </div>
    </>
  )
}



