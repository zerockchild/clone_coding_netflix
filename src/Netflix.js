import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Login from "./routes/Login";
import Main from "./routes/Main";

function Netflix() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/main" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default Netflix; 