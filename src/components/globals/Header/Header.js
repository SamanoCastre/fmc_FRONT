import React from 'react';
import Social from '../../Socials/Social/Social';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import './Header.css';

const Header = (props) => {
    var lastScrollTop = 0;
    document.addEventListener("scroll", ()=>{
      var nav = document.querySelector("#logo-nav-wrapper");
      var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
      
     st > lastScrollTop ?
        st >= 50 ? nav.classList.add('logo-nav-wrapper-top') :  nav.classList.remove('logo-nav-wrapper-top'):
        st <= 50 ?  nav.classList.remove('logo-nav-wrapper-top') : nav.classList.add('logo-nav-wrapper-top');
      
      //alert(st+" et " + lastScrollTop)
      lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
  }, false
  );
  console.log("subpage : " + props.subPage);
    
    return (
    <header className="Header">
        <Social />
        <div id="logo-nav-wrapper">
            <Logo />
            <Nav user={props.user} page={props.page}/>
        </div>
    </header>
    );
}

export default Header;
