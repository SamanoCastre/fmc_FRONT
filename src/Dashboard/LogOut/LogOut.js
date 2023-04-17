import React, { useEffect } from 'react';
import './LogOut.css';
import { ConnectionService } from '../../services/ConnectionService';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Common/Loading/Loading';
import { useDispatch } from 'react-redux';

const logOutService = ConnectionService.newInstance();
const LogOut = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    logOutService.data = {
      dispatch : dispatch,
      navigate : navigate
    }
    logOutService.logOut();
  },[dispatch, navigate]);
  
  return(
  <section className="LogOut" id="LogOut">
        <div className="space"></div>
        <div className="LogOut-header title">Se déconnecter du dashboard</div>
        <div className="header-line"></div>
        <div className="LogOut-body">
             <Loading />
        </div>
    </section>
);
  }

export default LogOut;
