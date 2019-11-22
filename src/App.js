import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import {Header} from './Header';
import Main from './Main/Main';
import Hooks from './Hooks/Hooks';

function App() {
    return (
            <Router>
                {/*Header*/}
                <Header/>

                {/*Body*/}
                <Route path="/redux" exact component={Main}/>
                <Route
                    path="/hooks"
                    render={props => <Hooks history="some text here" {...props} />}
                />

                {/*Footer*/}
            </Router>

    );
}

export default App;
