import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Header} from './Header';
import Redux from './Redux/Redux';
import Hooks from './Hooks/Hooks';

function Sandbox() {
    return (
        <Router>
            <Header/>
            <Route path="/sandbox/redux" exact component={Redux}/>
            <Route
                path="/sandbox/hooks"
                render={props => <Hooks history="some text here" {...props} />}
            />
        </Router>
    );
}

export default Sandbox;
