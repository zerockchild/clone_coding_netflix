import React from 'react'
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../domain/home/index'

const Routers = () => {

    return (
        <BrowserRouter>
            <Routes >
                <Route path='/home' element={ <Home />} />
=======
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../domain/home";

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
>>>>>>> chimco
            </Routes>
        </BrowserRouter>
    )
}
<<<<<<< HEAD

=======
>>>>>>> chimco
export default Routers;