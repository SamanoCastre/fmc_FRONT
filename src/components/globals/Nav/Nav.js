  import React, { useState, useEffect } from 'react';
  import {Link} from 'react-router-dom';
  import Dropdown from '../Dropdown/Dropdown';
  import NavService from '../../../services/NavService';
  import './Nav.css';

  const Nav = (props) => { 
  const [items, setItems] = useState([]);
    
  useEffect(() => {  
      const service = new NavService();
      setItems(service.list(props.page));
  },[props.page]);


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
      <div className="Nav mobile-menu desktop-menu">
            <i className="mobile-menu-toggler header-toggle mobile-toggle fa fa-bars" onClick={(e) =>mobileMenuToggleHandler(e)}></i>
            <ul>
                { 
                  items.map((item, index) =>
                  <li key={index} className={item.group ? "menu-dropdown " + item.group + "-dropdown" : ""}>
                      {item.group && <Dropdown header={item.header} body={item.item}/>}
                      {!item.group && <a className={item.item.htmlClass + " header-toggle"} target={item.item.target} href={item.item.href} onClick={(e)=>toggleHandler(e, item.item.href)} >{item.item.text}</a>}
                  </li>
                )}
            </ul>
      </div>
    );
  }
  export default Nav;