import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "../../../../Scss/_ageCalcultor.scss"

const initState = { date: "", time: " " }
export default function PersonAgeCont() {
    const [state, setState] = useState(initState)

    const handleChange = (event) => {
        setState((preState) => ({ ...preState, [event.target.name]: event.target.value }))
    }

    const getCurrentDate = () => {

        const today = new Date();
        const year = today.getFullYear()
        const month = (today.getMonth() + 1).toString().padStart(2, "0")
        const day = today.getDate().toString().padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const [selectedDate, setSelectedDate] = useState(getCurrentDate());

    const currentTime = () => {
        const today = new Date();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
        const formattedMinutes = minutes.toString().padStart(2, '0');
        return `${formattedHours}:${formattedMinutes} ${ampm}`;
    };
    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };
    const [selectedTime, setSelectedTime] = useState(currentTime());

    const handleCancel = () => {
        setState(initState);
    }

    return (
        <>
            <div className="container">
                <div className="row mt-5 pt-5">
                    <h2 className='mb-4'>Age Calculator</h2>
                    <Card className='age-card'>
                        <Card.Body>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Date of Birth</label>
                                    <input type="date" name='date' value={state.date} className='form-control' onChange={handleChange} />
                                </div>
                                <div className="col-md-6">
                                    <label className="form-label fw-semibold">Select Today’s Date</label>
                                    <input type="date" className='form-control' value={selectedDate} onChange={handleDateChange} />
                                </div>
                                <div className="col-md-6 mt-4 mb-5">
                                    <label className="form-label fw-semibold">Current Time</label>
                                    <input type="text" className='form-control' value={selectedTime} onChange={handleTimeChange} readOnly />
                                </div>
                                <div className="col-md-6 mt-4 mb-5">
                                    <label className="form-label fw-semibold">Birth Time</label>
                                    <input type="time" name='time' value={state.time} className='form-control' onChange={handleChange} />
                                </div>
                                <div className='text-end'>
                                    <Button variant="danger me-4 px-4" onClick={handleCancel}>Cancel</Button>
                                    <Button variant="me-4 px-4 fw-semibold me-3" style={{ background: "#E3FFED", color: "#5BB87B" }} onClick={handleCancel}>Add Time</Button>
                                    <Button variant="success px-4">Apply</Button>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <h2 className='mb-3 mt-5 pt-4'>Results</h2>
                    <Card className='age-card '>
                        <Card.Body>
                            <h5 className='mb-0 ' >Your Age is :</h5>
                            <div className='d-flex justify-content-between'>
                                <div>32 years , 11 Month , 21 days</div>
                                <div>December 12, 2021</div>
                            </div>
                            <h5 className='mb-0 mt-3' >Your Age in Month is:</h5>
                            <div className='d-flex justify-content-between'>
                                <div>32 years , 11 Month , 21 days</div>
                                <div>December 12, 2021</div>
                            </div>
                            <h5 className='mb-0 mt-3'>Your Age in Week is:</h5>
                            <div className='d-flex justify-content-between'>
                                <div>32 years , 11 Month , 21 days</div>
                                <div>December 12, 2021</div>
                            </div>
                            <h5 className='mb-0 mt-3'>Your Age in Days is:</h5>
                            <div className='d-flex justify-content-between'>
                                <div>32 years , 11 Month , 21 days</div>
                                <div>December 12, 2021</div>
                            </div>
                            <h5 className='mb-0 mt-3'>Your Age in Hours is:</h5>
                            <div className='d-flex justify-content-between'>
                                <div>32 years , 11 Month , 21 days</div>
                                <div>December 12, 2021</div>
                            </div>
                            <h5 className='mb-0 mt-3'>Your Age in Minutes is:</h5>
                            <div className='d-flex justify-content-between'>
                                <div>32 years , 11 Month , 21 days</div>
                                <div>December 12, 2021</div>
                            </div>
                            <h5 className='mb-0 mt-3'>Your Age in Seconds is:</h5>
                            <div className='d-flex justify-content-between'>
                                <div>32 years , 11 Month , 21 days</div>
                                <div>December 12, 2021</div>
                            </div>

                            <div className='text-end mt-5'>
                                <Button variant="success px-4">Copy</Button>
                            </div>
                        </Card.Body>

                    </Card>
                </div>
            </div>
        </>
    )
}
