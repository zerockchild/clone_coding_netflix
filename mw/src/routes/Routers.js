import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../domain/home/index'
import loadable from '@loadable/component';

const Series = loadable(() => import('../domain/series'), {
    fallback: <div>Loading...</div>,
});

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