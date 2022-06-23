import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Social/Social';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Carousel from '../Carousel/Carousel';

import './Header.css';

const Header = () => (
    <header className="Header">
        <Social />
        <div id="logo-nav-wrapper">
            <Logo />
            <Nav />
        </div>
        <Carousel />
    </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
