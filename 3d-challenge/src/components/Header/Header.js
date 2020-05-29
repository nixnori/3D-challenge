import React, { Component } from 'react';
import './Header.scss';
import hamburger from '../../assets/icon/hamburger.svg';
import logo from '../../assets/logo/logo.png';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img src={hamburger} />
                <img src={logo} />
                
            </div>
        )
    }
}

export default Header;