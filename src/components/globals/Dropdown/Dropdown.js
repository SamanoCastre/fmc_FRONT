import React,{ useState, useEffect} from 'react';
import './Dropdown.css';
import {Link} from 'react-router-dom';

const Dropdown = (props) => {
  const [status, setStatus] = useState('');
  
  const toggleHandler = (item) =>{
      
      if(!status.includes('open')) {//Cas où le dropdown est fermé
        
        document.querySelector('.Nav').querySelectorAll('.active').forEach((element)=>{//On regarde s'il y aurait un autre item activé
            
            if(element.parentNode.classList.contains('Dropdown')) {
              //Si l'item en question vient d'un dropdown
              //Si le dropdown est ouvert, on clique dessus, sinon on enlève tout simplement sa classe "active"
              
              element.classList.contains('open') ? element.click() :  element.classList.remove('active');
            }
            else {//Le drop down est fermé, alors on enlève sa classe active
               element.classList.remove('active');
            }
        });

        //On met le statut pour notre dropdown en cours
        setStatus('active open');
      }
      else {
        setStatus('');
        if(item) {
          item = item.contains("#") ? item.split("#")[1] : item;
          setStatus('active');
          document.getElementById(item).scrollIntoView();
        }
        document.querySelector('.mobile-menu-toggler').click();
      } 
  };

  return(
  <div className="Dropdown">
       <Link className={status + " header-toggle"} to="#"  onClick={()=>toggleHandler(null)}>
          {props.header} {status.includes('open') && <i className="fa fa-chevron-down"></i>}{!status.includes('open') && <i className="fa fa-chevron-up"></i>}
        </Link> 
       {status.includes('open') && 
        <ul>
            {
              props.body.map((item, index) => 
                 <li key={index}><Link to={item.href} onClick={()=>toggleHandler(item.href)}>
                  {
                     item.text.split('\n').map((it, i) => 
                       <div key={i}>{it}</div>
                     )
                  }
                
                </Link></li>
              )
            }
        </ul>
      }
  </div>
);
}
export default Dropdown;
