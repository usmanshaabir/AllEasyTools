import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Frontend from "../src/Pages/Frontend"

export default function PrivateRouter() {
    return (
        <>
            <Routes>
                <Route path='/*' element={<Frontend />} />
            </Routes>
        </>
    )
}
