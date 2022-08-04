import React from 'react';
import {BrowserRouter as Router, Route, Link, Routes} from 'react-router-dom';
// import Menu from "./menu";
import Search from './search';
import Logo from "../../assest/img/logo.png";

import "./header.scss";

function Header(){

    return(
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
                    {/* <Menu /> */}
                </div>
                <div className="pk-header-search">
                    <Search />
                </div>
            </div>
        </header>
    )
}

export default Header;