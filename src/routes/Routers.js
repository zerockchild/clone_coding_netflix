import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../domain/home/index';
import Series from '../domain/home/series';

const Routers = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={ <Home /> } />
                <Route path='/series' element={ <Series /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;