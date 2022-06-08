import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "../domain/home";
import Series from "../domain/series";

const Routers = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/:id" element={<Home/>} />
                <Route path="/series" element={<Series/>} />
                <Route path="/movie" element={<Home/>} />
                <Route path="/newContents" element={<Home/>} />
                <Route path="/myContents" element={<Home/>} />
            </Routes>
        </BrowserRouter>
    )
}
export default Routers;