import React from 'react';
import PropTypes from 'prop-types';
import Social from '../Social/Social';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';
import Carousel from '../Carousel/Carousel';

import './Header.css';

const Header = () => {
    var lastScrollTop = 0;
    document.addEventListener("scroll", ()=>{
      var nav = document.querySelector("#logo-nav-wrapper");
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      
      if (st > lastScrollTop){
        if(st > 50) {
          nav.classList.add('logo-nav-wrapper-top');
        }
        else {
          nav.classList.remove('logo-nav-wrapper-top');
        }
        console.log("downscroll" + st)
      } else {
        if(st <= 0) {
          nav.classList.remove('logo-nav-wrapper-top');
        }
        else {
          nav.classList.add('logo-nav-wrapper-top');
        }
        console.log(st)
        // upscroll code
      }
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false
  );
    
    return (
    <header className="Header">
        <Social />
        <div id="logo-nav-wrapper">
            <Logo />
            <Nav />
        </div>
        <Carousel />
    </header>
    );
}

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
