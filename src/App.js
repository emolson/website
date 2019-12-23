import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import Sandbox from "./sandbox"
import Blog from "./blog"


function App() {
    return (
            <Router>
                <Route path="/" component={Blog}/>
                <Route path="/sandbox" exact component={Sandbox}/>
            </Router>
    );
}

export default App;
