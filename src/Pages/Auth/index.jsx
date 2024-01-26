import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from "../Auth/Login"
import SignUp from "../Auth/SignUp"
import Forget from "../Auth/Forget";


export default function index() {
    return (
        <>
            <Routes>
                <Route path='login' element={<Login />} />
                <Route path='signup' element={<SignUp />} />
                <Route path='forget' element={<Forget />} />
            </Routes>
        </>
    )
}
