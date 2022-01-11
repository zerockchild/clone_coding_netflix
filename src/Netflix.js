import React from "react";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/Login";
import Main from "./routes/Main";

function Netflix() {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <Login />
                </Route>
                <Route path="/main">
                    <Main />
                </Route>
            </Switch>
        </Router>
    );
}

export default Netflix; 