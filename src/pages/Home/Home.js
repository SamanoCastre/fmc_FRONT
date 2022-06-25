import React from 'react';
import PropTypes from 'prop-types';

import Organization from '../../components/Organization/Organization';
import Donation from '../../components/Donation/Donation';
import News from '../../components/News/News';
import Action from '../../components/Action/Action';
import Team from '../../components/Team/Team';
import ContactForm from '../../components/ContactForm/ContactForm';
import LoginForm from '../../components/LoginForm/LoginForm';


const Home = () => (
  <section className="Home">
    <Organization />
    <Donation />
    <News />
    <Action />
    <Team />
    <ContactForm />
    <LoginForm />
  </section>
);

Home.propTypes = {};

Home.defaultProps = {};

export default Home;