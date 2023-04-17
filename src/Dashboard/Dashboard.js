import React, {useEffect }from 'react';
import Header from '../Common/Header/Header';
import SideBar from './SideBar/SideBar';
import {useOutlet} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VisitorStatistic from './Visitors/VisitorStatistic';
import Footer from '../Common/Footer/Footer';
import { ConnectionService } from '../services/ConnectionService';
import { MenuType } from '../Utils/Enums';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import Alert from '../Common/Alert/Alert';
import { EAlertTypes } from '../Utils/Enums';

const dashboardService = ConnectionService.newInstance();
const Dashboard = () => {
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const dispatch = useDispatch();
  const outlet = useOutlet();
  const navigate = useNavigate();

  useEffect(()=>{
    dashboardService.data = {
      dispatch : dispatch,
      navigate : navigate
    }
    dashboardService.dashboardGate();
  },[dispatch, navigate, onlineUser]);

  return (
    <>
    { (!onlineUser || onlineUser.id <= 0) &&  <Alert result = {{ type: EAlertTypes.ERROR,message:"Prière de vous authentifier avant d'accéder à ce contenu. Merci"}}/>}
    { onlineUser && onlineUser.id > 0 && <>
      <Header type={MenuType.DashboardNav}/>
      <SideBar/>
      <section className="Dashboard">
          {outlet || <VisitorStatistic/>}
          <Footer/>
      </section>
    </>  }
    </>
    );
  }

export default Dashboard;