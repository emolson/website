import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Header} from './Header';
import Main from './Main/Main';


function About() {
    return <h2>About</h2>;
}

function App() {
    return (
            <Router>
                <Header/>
                <Route path="/" exact component={Main}/>
                <Route path="/about/" component={About}/>
            </Router>
            //Body
            //Footer
    );
}

export default App;
