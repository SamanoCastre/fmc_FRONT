import React, { useState, useEffect }from 'react';
import Header from './components/globals/Header/Header';
import { useNavigate, useParams } from 'react-router-dom';
import SideBar from './components/globals/SideBar/SideBar';
import Visitors from './components/Visitors/Visitors';

const Dashboard = (props) => {
  const navigate = useNavigate();
  const {item} = useParams();

  let editing = true;

  useEffect(() => {
     //if(!props.user.userName) navigate("/");
     document.getElementById('root').classList.add("admin");
     
  });

  const handleCloseClick = () => {

  };
  
  return (
      //props.user.userName &&
      <>
        <Header page="admin" user={props.user}/>
        <SideBar item={item}/>
        <section className="Dashboard">
              {item === 'visiteurs' && <Visitors />}
        </section>
      </>
    );
  }

export default Dashboard;