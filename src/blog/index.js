import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import TopNav from "./topNav";
import Main from './main/Main';

function Blog() {
    return (
        <>
            <TopNav/>
             <Router>
                 <Route path="/" exact component={Main}/>
            </Router>

        </>

    );
}

export default Blog;
