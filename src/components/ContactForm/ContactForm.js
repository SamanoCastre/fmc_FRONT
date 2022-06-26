import React from 'react';
import PropTypes from 'prop-types';
import './ContactForm.css';

const ContactForm = () => {  
  
  const handleClick = (event) => {

  }
  
  return (
    <section className="ContactForm" id="contact">
          <div className="space"></div>
          <div className="contact-header title">Contactez-nous</div>
          <div className="header-line"></div>
          <div className="contact-body">
              <div className="contact-title">Nous envoyer un message</div>
              <form action="#" method="post" onSubmit={(e)=>handleClick(e)}>
                  <div className="form-field">
                      <label>Votre nom</label>
                      <input type="text" name="name"/>
                   </div>
                   <div className="form-field">
                      <label>Email</label>
                      <input type="text" name="email" />
                   </div>
                   <div className="form-field">
                      <label>Objet</label>
                      <input type="text" name="object"/>
                   </div>
                   <div className="form-field">
                      <label>Votre nom</label>
                      <textarea name="message" rows="6"></textarea>
                   </div>
                   <div className="form-field">
                      <input type="submit" value="ENVOYER MESSAGE"/>
                   </div>
              </form>
          </div>
      </section>
  );
}

export default ContactForm;
