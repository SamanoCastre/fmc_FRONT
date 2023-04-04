import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () =>{  
   const [editorLoaded, setEditorLoaded] = useState(false);
   const navigate = useNavigate();
   const [data, setData] = useState("");
 
   useEffect(() => {
     setEditorLoaded(true);
   }, []);
 

  const handleClick = (event) => {
    navigate("/admin/visiteurs");   
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
                      <input type="password" name="password" autoComplete='off'/>
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
