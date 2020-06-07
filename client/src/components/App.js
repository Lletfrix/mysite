import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { NavBar } from "./NavBar";
import styled from 'styled-components';

const body = {
    width: '100%',
    height: '110vh',
    backgroundColor: '#eeb0be'
}

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
                    <div style={body}></div>
                </Route>
            </Switch>
        </Router>
    )
}

export default App;

// export default function App() {
//   return (
//     <Router>
//       <div>
//
//       </div>
//     </Router>
//   );
// }
