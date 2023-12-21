import React from 'react'

export default function Counter() {
    return (
        <div>
            <div className="container">
                <div className="row mt-5 pt-5  ">
                    <div className='d-flex justify-content-between'>
                        <div>
                            <h4>Word Counter</h4>
                        </div>
                        <div>
                            <p>1 / 15 Characters</p>
                        </div>
                    </div>
                    <div class="mb-3">
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="9"></textarea>
                    </div>
                </div>
                <div class="row mt-5 ">
                    <h4>Live Tracking</h4>
                    <div class="col-sm-3 mb-3 mb-sm-0">
                        <div class="card" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            <div class="card-body p-3 ">
                                <p className='text-center mb-0'>Total Word Count : <span className='fw-bold' style={{ color: "#00B887" }}>23</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 mb-3 mb-sm-0">
                        <div class="card" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            <div class="card-body p-3 ">
                                <p className='text-center mb-0'>Total Characters Count : <span className='fw-bold' style={{ color: "#00B887" }}>23</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 mb-3 mb-sm-0">
                        <div class="card" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            <div class="card-body p-3 ">
                                <p className='text-center mb-0'>Total Sentences Count : <span className='fw-bold' style={{ color: "#00B887" }}>23</span></p>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-3 mb-3 mb-sm-0">
                        <div class="card" style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}>
                            <div class="card-body p-3 ">
                                <p className='text-center mb-0'>Total Paragraphs Count : <span className='fw-bold' style={{ color: "#00B887" }}>23</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
