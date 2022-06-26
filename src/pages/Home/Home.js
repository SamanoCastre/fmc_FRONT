import React from 'react';
import PropTypes from 'prop-types';

import Organization from '../../components/Organization/Organization';
import Donation from '../../components/Donation/Donation';
import News from '../../components/News/News';
import Action from '../../components/Action/Action';
import Team from '../../components/Team/Team';
import ContactForm from '../../components/ContactForm/ContactForm';
import LoginForm from '../../components/LoginForm/LoginForm';

import './Home.css';


const Home = () => (
  <section className="Home">
    <Organization />
    <News />
    <Action />
    <Team />
    <ContactForm />
    <LoginForm />
    <Donation />
  </section>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;