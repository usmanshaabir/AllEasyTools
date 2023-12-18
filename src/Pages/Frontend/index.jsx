import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Navbar from "../../Component/Navbar"
import Header from '../../Component/Header'

export default function index() {
  return (
    <>
      <Navbar />
      <Header />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
    </>
  )
}
