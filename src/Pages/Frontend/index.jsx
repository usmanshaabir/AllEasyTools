import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./Home";
import Header from '../../Component/Header'
import WordCounter from './Tools/WordCounter'

export default function index() {
  return (
    <>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='wordcounter' element={<WordCounter />} />
      </Routes>
    </>
  )
}
