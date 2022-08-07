import React from 'react';
import Search from './search';
import Logo from "../../assest/img/logo.png";

import "./header.scss";

function Header(){
    return(
        <>
        <header>
            <div className="pk-header">
                <div className="pk-header-logo">
                    <a href="/">
                        <img src={Logo} alt="Pokemon" />
                    </a>
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