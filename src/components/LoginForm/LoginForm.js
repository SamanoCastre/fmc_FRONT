import React from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';

const LoginForm = () =>{  
  
  const handleClick = (event) => {

  }
  
  return (
    <section className="LoginForm" id="login">
          <div className="space"></div>
          <div className="login-header title">Authentification</div>
          <div className="header-line"></div>
          <div className="login-body">
              <div className="login-title">Formulaire de connexion</div>
              <form action="#" method="post" onSubmit={(e)=>handleClick(e)}>
                   <div className="form-field">
                      <label>Email</label>
                      <input type="text" name="email" />
                   </div>
                   <div className="form-field">
                      <label>Mot de passe</label>
                      <input type="password" name="password"/>
                   </div>
                   <div className="form-field">
                      <label>Mot de passe oublié?</label>
                   </div>
                   <div className="form-field">
                      <input type="submit" value="ENVOYER"/>
                   </div>
              </form>
          </div>
      </section>
  );
}

export default LoginForm;
