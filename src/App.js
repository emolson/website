import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Header} from './Header';
import Main from './Main/Main';


function About({...props}) {
    console.log(props);
    return (<div>
        <h2>About</h2>
        <h1></h1>
    </div>);
}

function App() {
    return (
            <Router>
                <Header/>
                <Route path="/" exact component={Main}/>
                <Route
                    path="/about/"
                    render={props => <About history="some text here" {...props} />}
                />            </Router>
            //Body
            //Footer
    );
}

export default App;
