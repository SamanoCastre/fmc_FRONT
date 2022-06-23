import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Social/Social';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Banner from '../Banner/Banner';

import './Header.css';

const Header = () => (
    <header className="Header">
        <Social/>
        <div id="logo-nav-wrapper">
            <Logo/>
            <Nav/>
        </div>
        <Banner/>
    </header>
);

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
