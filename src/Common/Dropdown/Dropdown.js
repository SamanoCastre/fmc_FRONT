import React,{ useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { VisitorService } from '../../services/VisitorService';
import './Dropdown.css';
import {Link} from 'react-router-dom';

const dropdownVisitorService = VisitorService.newInstance();
const Dropdown = ({header, body, withIcon = false}) => {
  const [status, setStatus] = useState('');
  const dispatch = useDispatch();
  const visitedContents = useSelector(state => state.common_state.visitedContents);

  useEffect(()=> {
    dropdownVisitorService.data = {
      dispatch : dispatch
    }
  },[]);


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
          item = item.includes("#") ? item.split("#")[1] : item;
          setStatus('active');
          document.getElementById(item).scrollIntoView();
        }
        dropdownVisitorService.setVisited(visitedContents, item);
        document.querySelector('.mobile-menu-toggler').click();
      } 
     
  };

  return(
  <div className="Dropdown">
       <Link className={status + " header-toggle"} to="#"  onClick={()=>toggleHandler(null)}>
          {withIcon && <i className={header.icon}/>}
          {header.text} {status.includes('open') && <i className="fa fa-chevron-down"></i>}{!status.includes('open') && <i className="fa fa-chevron-up"></i>}
        </Link> 
       {status.includes('open') && 
        <ul>
            {
              body.map((item, index) => 
                 <li key={index}>
                  {
                    item.href.includes("#") === true &&
                    <Link to={item.href} onClick={()=>toggleHandler(item.href)}>
                      { withIcon && <i className={item.icon}/>}
                      { item.text.split('\n').map((it, i) =><span key={i}>{it}</span>)}
                    </Link>
                  }
                  {
                    item.href.includes("#") === false &&
                    <Link to={item.href}>
                      { withIcon && <i className={item.icon}/>}
                      { item.text.split('\n').map((it, i) =><span key={i}>{it}</span>)}
                    </Link>
                  }
                </li>)
            }
        </ul>
      }
  </div>
);
}
export default Dropdown;
