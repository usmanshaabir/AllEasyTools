import React from 'react';
import Navbars from './Navbars';
import ToolLogo from "../Assets/Images/logo.png"
import { useNavigate } from 'react-router-dom';


export default function Header() {
  const navigate = useNavigate()

  const handleHome = () => {
    navigate('/')
  }
  return (
    <>
      <Navbars />
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <img className='me-2' src={ToolLogo} alt="ToolLogo not found" />
          <a className="navbar-brand" onClick={handleHome} style={{ cursor: "pointer" }}>AllEasyTool</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" onClick={handleHome} style={{ cursor: "pointer" }} >Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Tools</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Solutions</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active">Pricing</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
