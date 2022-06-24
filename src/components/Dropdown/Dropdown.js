import React from 'react';
import './Dropdown.css';
import {Link} from 'react-router-dom';

const Dropdown = (props) => {

  return(
  <div className="Dropdown">
       <Link className={props.currentItem === props.item ? 'active header-toggle' : "header-toggle"} to="#" >{props.header} {props.currentItem === props.item && <i className="fa fa-chevron-down"></i>}{props.currentItem !== props.item && <i className="fa fa-chevron-up"></i>}
       </Link> 
       {props.currentItem === props.item  &&
        <ul>
            {
              props.body.map((item, index) => 
                 <li key={index}><Link to={item.href}>
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
