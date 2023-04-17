import React, {useState, useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import Dropdown from "../Dropdown/Dropdown";
import {MenuService} from "../../services/MenuService";
import {VisitorService} from "../../services/VisitorService";
import "./Nav.css";
import {Link} from "react-router-dom";

const navService = MenuService.newInstance();
const navVisitorService = VisitorService.newInstance();
const Nav = ({type}) => {
  const menuRx = useSelector(state => state.common_state.menu);
  const dispatch = useDispatch();
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const visitedContents = useSelector(state => state.common_state.visitedContents);
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    navService.data = {
      setMenu: setMenu,
      type: type,
      dispatch : dispatch
    };
    navVisitorService.data = {
      dispatch : dispatch
    }
    navService.initMenu(menuRx, onlineUser);
  }, [dispatch, menuRx, onlineUser, type]);

  const toggleHandler = (event, item) => {
    
    const toggler = event.target;
    if (!toggler.classList.contains("active")) {
      document
        .querySelector(".Nav")
        .querySelectorAll(".active")
        .forEach(element => {
          if (element.parentNode.classList.contains("Dropdown")) {
            element.classList.contains("open")
              ? element.click()
              : element.classList.remove("active");
          } else {
            element.classList.remove("active");
          }
        });
      toggler.classList.add("active");
    }
    if (item.includes("#")) {
      item = item.substring(1);
    }

    if (document.getElementById(item) != null) {
      document.getElementById(item).scrollIntoView();
    }
    navVisitorService.setVisited(visitedContents, item);
    document.querySelector(".mobile-menu-toggler").click();
  };

  const mobileMenuToggleHandler = event => {
    let element = event.target;
    let parent = element.parentNode;
    parent.classList.toggle("active");

    if (element.classList.contains("fa-bars")) {
      element.classList.remove("fa-bars");
      element.classList.add("fa-times");
    } else if (element.classList.contains("fa-times")) {
      element.classList.remove("fa-times");
      element.classList.add("fa-bars");
    }
  };

  return (
    <div className="Nav mobile-menu desktop-menu">
      <i
        className="mobile-menu-toggler header-toggle mobile-toggle fa fa-bars"
        onClick={e => mobileMenuToggleHandler(e)}
      ></i>
      <ul>
        {menu &&
          menu.map((element, index) => (
            <li
              key={index}
              className={
                element.items
                  ? "menu-dropdown " + element.head + "-dropdown"
                  : ""
              }
            >
              {element.items && (
                <Dropdown header={element.head} body={element.items} />
              )}
              {!element.items && (
                <Link
                className={element.htmlClass + " header-toggle"}
                target={element.target}
                to={element.href}
                onClick={e => toggleHandler(e, element.href)}
              >
                {element.text}
              </Link>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};
export default Nav;
