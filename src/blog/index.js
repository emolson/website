import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import TopNav from "./topNav";

function Blog() {
    return (
        <>
            <TopNav/>
            {/* <Router>*/}
            {/*     <Route path="/" exact component={Header}/>*/}
            {/*</Router>*/}
            <div style={{height: '500px', backgroundColor: 'yellow'}}>
                Content goes here
            </div>
            </>

    );
}

export default Blog;
