  import React, { useState, useEffect } from 'react';
  import {Link} from 'react-router-dom';
  import Dropdown from '../Dropdown/Dropdown';
  import './Nav.css';

  const Nav = () => { 

    const [organisation, setOrganisation] = useState([]);
    const [plus, setPlus] = useState([]);
    const [currentItem, setCurrentItem] = useState('accueil');
    const [mobileMenu, setMobileMenu] = useState('');
    const [status, setStatus] = useState(true);
    
    useEffect(() => {  
      const plus = [];//Tableau vide

      plus.push({href: 'news', text: 'Actualités de la clminique de Port-au-prince'});
      plus.push({href: 'action', text: 'Action de l\'association en France (projets)'});
      plus.push({href: 'sites', text: 'Les sites associés'});
      plus.push({href: 'team', text: 'Notre équipe'});
      plus.push({href: 'contact', text: 'Contactez-nous'});
      plus.push({href: 'login', text:'Se connecter'});
      
      const organisation = [];
      organisation.push({href: 'organization', text: 'Fondation MaxCadet\n - Haïti\n- Amérique\n- Europe'});
      
      setPlus(plus);
      setOrganisation(organisation);
      
  },[]);

    const toggleHandler = (event, item) =>{
        const toggler = event.target;
        if(!toggler.classList.contains('active')) {

          document.querySelector('.Nav').querySelectorAll('.active').forEach((element)=>{
              if(element.parentNode.classList.contains('Dropdown')) {
                  element.classList.contains('open')  ? element.click() : element.classList.remove('active');
              }
              else {
                element.classList.remove('active');
              }
          });

          toggler.classList.add('active');
        }
        document.getElementById(item).scrollIntoView();
        document.querySelector('.mobile-menu-toggler').click();
      }

    const mobileMenuToggleHandler = (event) =>{
      
      let element = event.target;
      let parent = element.parentNode;
      parent.classList.toggle('active');

      if(element.classList.contains('fa-bars')){
        element.classList.remove('fa-bars');
        element.classList.add('fa-times');
      }
      else if(element.classList.contains('fa-times')){
        element.classList.remove('fa-times');
        element.classList.add('fa-bars');
      }
    };

    return (
      <div className={mobileMenu + "Nav mobile-menu desktop-menu"}>
            <i className="mobile-menu-toggler header-toggle mobile-toggle fa fa-bars" onClick={(e) =>mobileMenuToggleHandler(e)}></i>
            <ul>
                <li onClick={(e)=>toggleHandler(e, 'home')}>
                  <Link className="header-toggle" to="#home">Accueil</Link>
                </li>
                <li className="menu-dropdown">
                    <Dropdown header="Notre organisation" body={organisation}/>
                </li>
                <li  onClick={(e)=>toggleHandler(e, 'donation')}>
                  <Link className="header-toggle" to="#donation">Faire un don</Link>
                </li>
                <li className="menu-dropdown" >
                    <Dropdown header="Plus" body={plus}/>
                </li>
            </ul>
      </div>
    );
  }
  export default Nav;
