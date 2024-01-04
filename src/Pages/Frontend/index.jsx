import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Header from '../../Component/Header'
import WordCounter from './Tools/WordCounter'
import AgeCalculator from './Tools/AgeCalculator'
import Footer from '../../Component/Footer';
import PasswordGenerator from "../../Pages/Frontend/Tools/PasswordGen"

export default function index() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='wordcounter' element={<WordCounter />} />
        <Route path='agecalcultor' element={<AgeCalculator />} />
        <Route path='password' element={<PasswordGenerator />} />
      </Routes>
      <Footer />
    </>
  )
}
