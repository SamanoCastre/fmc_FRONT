import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import Dropdown from '../Dropdown/Dropdown';
import './Nav.css';

const Nav = () => { 

  const [organisation, setOrganisation] = useState([]);
  const [plus, setPlus] = useState([]);
  const [currentItem, setCurrentItem] = useState('accueil');
  const [mobileMenu, setMobileMenu] = useState('');
  
  useEffect(() => {  
    const plus = [];//Tableau vide

    plus.push({href: '#news', text: 'Actualités de la clminique de Port-au-prince'});
    plus.push({href: '#action', text: 'Action de l\'association en France (projets)'});
    plus.push({href: '#sites', text: 'Les sites associés'});
    plus.push({href: '#team', text: 'Notre équipe'});
    plus.push({href: '#contact', text: 'Contactez-nous'});
    plus.push({href: '#administration', text:'Administration'});
    
    const organisation = [];
    organisation.push({href: '#organization', text: 'Fondation MaxCadet\n - Haïti\n- Amérique\n- Europe'});
    
    setPlus(plus);
    setOrganisation(organisation);
    
 },[]);

  const toggleHandler = (event, item) =>{
      event.preventDefault();
      document.querySelectorAll('.header-toggle').forEach((element)=>{
        element.classList.remove('active');
    });
    event.target.classList.add('active');
    item === currentItem ? setCurrentItem("") : setCurrentItem(item);
  };

  const mobileMenuToggleHandler = (event) =>{
    event.preventDefault();
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
    

    /*
    document.querySelectorAll('.header-toggle').forEach((element)=>{
      element.classList.remove('active');
    });
    event.target.classList.add('active');*/
  };

 
  return (
    <div className={mobileMenu + "Nav mobile-menu desktop-menu"}>
          <i className="header-toggle mobile-toggle fa fa-bars" onClick={(e) =>mobileMenuToggleHandler(e)}></i>
          <ul>
              <li onClick={(e)=>toggleHandler(e, 'accueil')}><Link className="header-toggle active" to="#home">Accueil</Link></li>
              <li className="menu-dropdown"  onClick={(e)=>toggleHandler(e, 'organisation')}>
                  <Dropdown currentItem={currentItem}  item="organisation" header="Notre organisation" body={organisation}/>
              </li>
              <li  onClick={(e)=>toggleHandler(e, 'don')}><Link className="header-toggle" to="#">Faire un don</Link></li>
              <li className="menu-dropdown"  onClick={(e)=>toggleHandler(e, 'plus')}>
                  <Dropdown currentItem={currentItem} item="plus" header="Plus" body={plus}/>
              </li>
          </ul>
    </div>
  );
}
export default Nav;
