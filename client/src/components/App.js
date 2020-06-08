import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { NavBar, navbarHeight } from "./NavBar";
import { HomeScreen } from './HomeScreen';
import styled from 'styled-components';

const FixedNavBar = styled(NavBar)`
    position: fixed;
    top: 0;
    width: 100%;
    transition: background-color 0.3s;
`;


const App = () => {

    return (
        <Router>
            <FixedNavBar/>
            <Switch>
                <Route path="/blog">
                    BLOG
                </Route>
                <Route path="/about">
                    ABOUT
                </Route>
                <Route path="/">
                    <HomeScreen  style={{paddingTop: navbarHeight}}/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
