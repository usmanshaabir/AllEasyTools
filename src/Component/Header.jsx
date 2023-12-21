import React from 'react';
import Navbars from './Navbars';
import ToolLogo from "../Assets/Images/logo.png"

export default function Header() {
  return (
    <>
      <Navbars />
      <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
          <img className='me-2' src={ToolLogo} alt="ToolLogo not found" />
          <a class="navbar-brand" >AllEasyTool</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Tools</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Solutions</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" href="#">Pricing</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
