import React from 'react'
import LogIn from './LogIn';
import Main from './Main';
import Signup from './Signup';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route path="/LogIn">
                    <LogIn />
                </Route>
                <Route path="/SignUp">
                    <Signup />
                </Route>
            </Switch>
        </Router>
    )
}
