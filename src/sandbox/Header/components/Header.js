import React from 'react';
import {Link } from "react-router-dom";

const Header = () => (
    <React.Fragment>
        <nav>
            <ul>
                <li>
                    <Link to="/sandbox/redux">Redux</Link>
                </li>
                <li>
                    <Link to="/sandbox/hooks/">Hooks</Link>
                </li>
            </ul>
        </nav>
    </React.Fragment>
);

export default Header;
