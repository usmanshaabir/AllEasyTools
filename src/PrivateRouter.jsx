import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontend from "../src/Pages/Frontend";
import Auth from "../src/Pages/Auth";

export default function PrivateRouter() {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend />} />
                <Route path='auth/*' element={<Auth />} />
            </Routes>
        </>
    )
}
