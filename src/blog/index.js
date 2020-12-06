import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";

import TopNav from "./topNav";
import Main from './main/Main';
import Footer from './footer/Footer';

function Blog() {
    return (
        <div style={{
            display: 'flex',
            minHeight: '100vh',
            flexDirection: 'column'
        }}>
            <div style={{flex:1}}>
            <TopNav/>
            <Router>
                <Route path="/" exact component={Main}/>
            </Router>
            </div>
            <Footer/>
        </div>
    );
}

export default Blog;
