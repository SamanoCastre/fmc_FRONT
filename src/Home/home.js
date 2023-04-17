import React, { useEffect } from 'react';
import Content from '../Common/Content/Content';
import ContactForm from '../Form/ContactForm/ContactForm';
import LoginForm from '../Form/LoginForm/LoginForm';
import Header from '../Common/Header/Header';
import { useOutlet } from 'react-router-dom';
import CarouselItemList from '../Common/CarouselItemList/CarouselItemList';
import { setPage } from '../redux/reducer';
import { useDispatch } from 'react-redux';
import './Home.css';
import TeamList from '../Common/UserList/UserList';
import ContentList from '../Common/ContentList/ContentList';
import { EContentTypes, MenuType } from '../Utils/Enums';
import { useSelector } from 'react-redux';
import Footer from '../Common/Footer/Footer';
import SiteList from '../Common/SiteList/SiteList';

const Home = () => {
  const outlet = useOutlet();
  const dispatch = useDispatch();
  const user = useSelector(state => state.common_state.onlineUser);
  useEffect(()=>{
    dispatch(setPage("home"));
  },[dispatch]);

  return(
  <>
    <Header type={MenuType.HomeNav}/>
    <section className="Home row">
      { outlet }
       <CarouselItemList />
      <Content type={EContentTypes.Organization}/>
      <ContentList type={EContentTypes.Activity}/>
      <ContentList type={EContentTypes.News}/>
      <ContentList type={EContentTypes.Project}/>
      <ContentList type={EContentTypes.Post}/>
      <TeamList />
      <Content type={EContentTypes.Donation}/>
      <ContentList type={EContentTypes.Partner}/>
      <ContactForm/>
      {user && !user.id && <LoginForm />}
      <SiteList/>
      <Footer/>
    </section>
  </>
);
  }
export default Home;

/**
 * { !id  && (outlet || <CarouselItemList />) }
 */