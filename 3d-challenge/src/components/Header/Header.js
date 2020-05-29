import React, { Component } from 'react';
import './Header.scss';
import hamburger from '../../assets/icon/hamburger.svg';
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="header__container">
                    <img className="header__menu" src={hamburger} />
                    <img className="header__logo" src={logo} />
                </div>
                <Link to="" className="header__link">Updated COVID-19 Business Regulations</Link>
            </div>
        )
    }
}

export default Header;