import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import {Provider} from 'react-redux';
import store from './reduxConfig/configureStore';


import {Header} from './Header';

function Index() {
    return <h2>Home</h2>;
}

function About() {
    return <h2>About</h2>;
}

function App() {
    return (
        <Provider store={store}>
            <Router>
                <Header/>
                <Route path="/" exact component={Index}/>
                <Route path="/about/" component={About}/>
            </Router>
            //Body
            //Footer
        </Provider>
    );
}

export default App;
