import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../domain/home/index'
import Series from '../domain/series'

const Routers = () => {

    return (
        <BrowserRouter>
            <Routes >
                <Route path='/home' element={ <Home />} />
                <Route path='/series' element={ <Series />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;