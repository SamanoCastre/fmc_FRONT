import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { MenuService } from '../../services/MenuService';
import Dropdown from '../../Common/Dropdown/Dropdown';
import {Link} from 'react-router-dom';
import './SideBar.css';
import { MenuType } from '../../Utils/Enums';
import { setCurrentDashboardItem } from '../../redux/reducer';
import { useDispatch } from 'react-redux';

const sideBarService = MenuService.newInstance();
const SideBar = () => {
  const dispatch = useDispatch();
  const menuRx = useSelector(state => state.common_state.menu);  
  const activeItem = useSelector(state => state.common_state.currentDashboardItem);
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const [menu, setMenu] = useState(null);

  useEffect(() => {
    sideBarService.data = {
      setMenu: setMenu,
      type: MenuType.Sidebar,
    };
    sideBarService.initMenu(menuRx, onlineUser);
  },[menuRx, onlineUser]);

  const className = (element) => {
  
    if(element.head) {

      let theClass = "menu-dropdown " + element.group + "-dropdown";
      return element.head.group.includes(activeItem) ? theClass + " active" : theClass;
    }
    if(element.href) {
      return element.href.includes(activeItem) ? " active" : "";
    }
    return "";
  };

  const setActiveItem = (element) => {
    if(element.head) {
      dispatch(setCurrentDashboardItem(element.head.group))
    }
    if(element.href) {
      dispatch(setCurrentDashboardItem(element.href))
    }
  }


  return(
        <div className="SideBar">
          <h1><i className="fa fa-home"> Tableau de bord</i></h1>
          <ul>{ menu &&
                  menu.map((element, index) =>
                  <li key={index} className={className(element)} onClick={()=>setActiveItem(element)}>
                      {element.items && <Dropdown header={element.head} body={element.items} withIcon={true} />}
                      {!element.items && 
                        <Link className={element.htmlClass + " header-toggle"}  to={element.href}>
                          <i className={element.icon}/>
                          <span>{element.text}</span>
                        </Link>
                      }
                  </li>
                )
              }
          </ul>
        </div>
  );
}
export default SideBar;
