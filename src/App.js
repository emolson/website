import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Header} from './Header';


function Index() {
    return <h2>Home</h2>;
}

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
            <Route path="/" exact component={Index}/>
            <Route
                path="/about/"
                render={props => <About history="some text here" {...props} />}
            />
        </Router>
        //Body
        //Footer
    );
}

export default App;
