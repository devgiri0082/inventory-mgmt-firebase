import React from 'react'
import LogIn from './LogIn';
import Main from './Main';
import Signup from './Signup';
import Laptop from "./Laptop";
import Mobile from "./Mobile";
import Appliances from "./Appliances";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Categories from './Categories';
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
                <Route path="/Categories">
                    <Categories />
                </Route>
            </Switch>
            <Route path="/Laptop">
                <Laptop />
            </Route>
            <Route path="/Mobile">
                <Mobile />
            </Route>
            <Route path="/Appliances">
                <Appliances />
            </Route>
        </Router>
    )
}
