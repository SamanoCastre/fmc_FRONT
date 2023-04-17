import React, { useEffect, useState } from 'react';
import Logo from '../Logo/Logo';
import Nav from '../Nav/Nav';

import './Header.css';
import CoordinateList from '../CoordinateList/CoordinateList';

const Header = ({type}) => {
    
    const [navClass, setNavClass] = useState("");

    useEffect(()=>{
        let lastScrollTop = 0;
        document.addEventListener("scroll", ()=>{
            
            let offsetY = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
            
            if(offsetY > lastScrollTop) {
                offsetY >= 50 ? setNavClass('logo-nav-wrapper-top') :  setNavClass('');
            }
            else {
                offsetY <= 50 ?  setNavClass('') : setNavClass('logo-nav-wrapper-top');
            }
            lastScrollTop = offsetY <= 0 ? 0 : offsetY; // For Mobile or negative scrolling
        }, false);
    },[]);
    /*
    */
   
    return (
    <header className={"Header " + type + "-header" } >
        <div className="Header-top" id="home">
            <CoordinateList />
        </div>
        <div id="logo-nav-wrapper" className={navClass}>
            <Logo />
            <Nav type={type}/>
        </div>
    </header>
    );
}

export default Header;
