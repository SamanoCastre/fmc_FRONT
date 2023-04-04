import React from 'react';

import Organization from './components/Organizations/Organization/Organization';
import Donation from './components/globals/Donation/Donation';
import NewsList from './components/News/NewsList/NewsList';
import ProjectList from './components/Projects/ProjectList/ProjectList';
import ActivityList from './components/Activities/ActivityList/ActivityList';
import Team from './components/Teams/Team/Team';
import ContactForm from './components/Contacts/ContactForm/ContactForm';
import LoginForm from './components/Logins/LoginForm/LoginForm';
import Header from './components/globals/Header/Header';
import {useOutlet, useParams} from 'react-router-dom';
import CarouselItemList from './components/Carousel/CarouselItemList/CarouselItemList';

import './index.css';

const Home = (props) => {
  const {id} = useParams();
  const outlet = useOutlet();
  return(
  <>
    <Header page="home" user={props.user} subPage = {id}/>
    <section className="Home">
      { outlet || <CarouselItemList /> }
      <Organization />
      <ActivityList />
      <NewsList />
      <ProjectList />
      <Team />
      <Donation/>
      <ContactForm />
      <LoginForm />
    </section>
  </>
);
  }
export default Home;