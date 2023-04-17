import React, {useEffect} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import "./app.css";
import Home from "./Home/home";
import Dashboard from "./Dashboard/Dashboard";
import Error404 from "./Common/Error/Error404";
import UserList from "./Common/UserList/UserList";
import ContactList from "./Dashboard/ContactList/ContactList";
import VisitorStatistic from "./Dashboard/Visitors/VisitorStatistic";
import MenuForm from "./Form/MenuForm/MenuForm";
import LogOut from "./Dashboard/LogOut/LogOut";
import Content from "./Common/Content/Content";
import CarouselItemList from "./Common/CarouselItemList/CarouselItemList";
import FmcValuesForm from "./Form/FmcValuesForm/FmcValuesForm";
import {ActionTypes} from "./Utils/Enums";
import {ConnectionService} from "./services/ConnectionService";
import {CarouselService} from "./services/CarouselService";
import {MenuService} from "./services/MenuService";
import {FmcValuesService} from "./services/FmcValuesService";
import {UserService} from "./services/UserService";
import {ContentService} from "./services/ContentService";
import { VisitorService } from "./services/VisitorService";

import CodeForm from "./Form/CodeForm/CodeForm";
import {MenuType} from "./Utils/Enums";
import EmailForm from "./Form/EmailForm/EmailForm";
import PasswordForm from "./Form/PasswordForm/PasswordForm";
import ContentList from "./Common/ContentList/ContentList";
import ScrollToTop from "./Common/ScrollTop/ScrollTop";
import {EContentTypes, EUserTypes, EFMCValuesTypes} from "./Utils/Enums";
import Profil from "./Dashboard/Profil/Profil";

const App = () => {
  const dispatch = useDispatch();
  const visitedContents = useSelector(state => state.common_state.visitedContents);
  const connectionService = ConnectionService.newInstance();
  const carouselService = CarouselService.newInstance();
  const contentService = ContentService.newInstance();
  const  fmcValuesService =  FmcValuesService.newInstance();
  const menuService = MenuService.newInstance();
  const userService = UserService.newInstance();
  const visitorService = VisitorService.newInstance();

  useEffect(() => {
      connectionService.data = { dispatch : dispatch}
      carouselService.data = { dispatch : dispatch}
      contentService.data = { dispatch : dispatch}
      fmcValuesService.data = { dispatch : dispatch}
      menuService.data = { dispatch : dispatch}
      userService.data = { dispatch : dispatch}
      visitorService.data = { dispatch : dispatch}
      connectionService.generateToken().then(() => {
            contentService.list();
            fmcValuesService.list();
            menuService.list();
            carouselService.list();
            userService.list();
            visitorService.setVisited(visitedContents, "home");
            connectionService.setIntervalRefreshToken();
      });
  });

  return (
    <div className="App row">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route 
            path="/"
            element={<Home />}>
              <Route
              exact
              path="home" />
            <Route
              exact
              path="recovery"
              element={<EmailForm type={ActionTypes.RECOVERY} />}
            />
            <Route
              exact
              path="password/:code/:id"
              element={<PasswordForm type={ActionTypes.RECOVERY} />}
            />
            <Route 
              exact 
              path="code/:code/:type/:id" 
              element={<CodeForm />} />
            <Route 
              exact 
              path="contents/:id" 
              element={<Content />} />
            <Route
              exact
              path="contents/mention"
              element={<Content type={EContentTypes.Mention} />}
            />
            <Route
              exact
              path="contents/relais"
              element={<Content type={EContentTypes.Relais} />}
            />
            <Route
              exact
              path="contents/dental"
              element={<Content type={EContentTypes.Dental} />}
            />
            <Route
              exact
              path="contents/organization"
              element={<Content type={EContentTypes.Organization} />}
            />
          </Route>
          <Route 
            exact 
            path="/dashboard" 
            element={<Dashboard />}>
            <Route 
              exact 
              path="logout" 
              element={<LogOut />} />
            <Route 
              exact 
              path="visitors-stat" 
              element={<VisitorStatistic />} />
            <Route 
              exact 
              path="carousel-items" 
              element={<CarouselItemList />} />
            <Route 
              exact 
              path="our-contents/:id" 
              element={<ContentList />} />
            <Route
              exact
              path="our-coordinates"
              element={<FmcValuesForm type={EFMCValuesTypes.Coordinate} />}
            />
            <Route
              exact
              path="our-sites"
              element={<FmcValuesForm type={EFMCValuesTypes.Site} />}
            />
            <Route
              exact
              path="our-labels"
              element={<FmcValuesForm type={EFMCValuesTypes.Label} />}
            />
            <Route
              exact
              path="our-team"
              element={<UserList type={EUserTypes.TEAM} />}
            />
            <Route
              exact
              path="our-members"
              element={<UserList type={EUserTypes.MEMBER} />}
            />
            <Route exact path="contacts" element={<ContactList />} />
            <Route
              exact
              path="horizontal-menu"
              element={<MenuForm type={MenuType.Horizontal} />}
            />
            <Route
              exact
              path="vertical-menu"
              element={<MenuForm type={MenuType.Vertical} />}
            />
            <Route
              exact
              path="contents/donation"
              element={<Content type={EContentTypes.Donation} />}
            />
            <Route
              exact
              path="contents/mention"
              element={<Content type={EContentTypes.Mention} />}
            />
            <Route
              exact
              path="contents/relais"
              element={<Content type={EContentTypes.Relais} />}
            />
            <Route
              exact
              path="contents/dental"
              element={<Content type={EContentTypes.Dental} />}
            />
            <Route
              exact
              path="contents/organization"
              element={<Content type={EContentTypes.Organization} />}
            />
            <Route 
              exact 
              path="my-profile" 
              element={<Profil />} />
          </Route>
          <Route 
            path="*" 
            element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
