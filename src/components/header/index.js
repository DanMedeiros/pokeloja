import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
import Search from './search';
import Logo from "../../assest/img/logo.png";

import "./header.scss";

function Header(){
    return(
        <>
        <header>
            <div className="pk-header">
                <div className="pk-header-logo">
                    <Router>
                        <Link to="/">
                            <img src={Logo} alt="Pokemon" />
                        </Link>
                    </Router>
                </div>
                <div className="pk-header-menu">
                </div>
                <div className="pk-header-search">
                    <Search />
                </div>
            </div>
        </header>
        </>
    )
}

export default Header;