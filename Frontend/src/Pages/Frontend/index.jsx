import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Header from '../../Component/Header'
import WordCounter from './Tools/WordCounter'
import AgeCalculator from './Tools/AgeCalculator'
import Recaptcha from './Tools/Recaptcha'
import Footer from '../../Component/Footer';
import PasswordGenerator from "../../Pages/Frontend/Tools/PasswordGen";
import UppercaseToLowercase from "../../Pages/Frontend/Tools/UppercaseToLowercase";
import PdfToWord from "../../Pages/Frontend/Tools/PdfToWord";

export default function index() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path='wordcounter' element={<WordCounter />} />
          <Route path='agecalcultor' element={<AgeCalculator />} />
          <Route path='password' element={<PasswordGenerator />} />
          <Route path='recaptcha' element={<Recaptcha />} />
          <Route path='convertletter' element={<UppercaseToLowercase />} />
          <Route path='pdftoword' element={<PdfToWord />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
