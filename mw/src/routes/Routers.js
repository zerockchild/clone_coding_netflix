import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../domain/home/index'

const Routers = () => {

    return (
        <BrowserRouter>
            <Routes >
                <Route path='/home' element={ <Home />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers;