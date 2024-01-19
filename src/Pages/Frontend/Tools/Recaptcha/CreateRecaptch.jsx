import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

export default function CreateRecaptch() {
  const [state, setState] = useState("hgj12HG")
  const [checkRecaptcha, setCheckRecaptcha] = useState({ writeCaptacha: "" })

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
      console.log("ok")
    } else {
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
          </Card>
        </div>
      </div>
    </>
  )
}



