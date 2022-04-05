import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../domain/home/index';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={ <Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;