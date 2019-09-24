import React from 'react';
import {Link } from "react-router-dom";


const Header = () => (
    <React.Fragment>
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about/">About</Link>
                </li>
            </ul>
        </nav>
    </React.Fragment>
);

export default Header;