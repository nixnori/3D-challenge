import React, { Component } from 'react';
import './Header.scss';
import hamburger from '../../assets/icon/hamburger.svg';
import logo from '../../assets/logo/logo.png';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div className="header">
                <img className="header__menu" src={hamburger} />
                <div className="header__container">
                    <img className="header__logo" src={logo} />
                    <Link to="" className="header__link">Updated COVID-19 Business Regulations</Link>
                </div>
            </div>
        )
    }
}

export default Header;