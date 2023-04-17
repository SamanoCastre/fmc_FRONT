import React, {useEffect, useState} from 'react';
import './LoginForm.css';
import { Link, useNavigate } from 'react-router-dom';
import { ConnectionService } from '../../services/ConnectionService';
import Alert from '../../Common/Alert/Alert';
import Loading from '../../Common/Loading/Loading';
import { useDispatch } from 'react-redux';

const loginFormservice = ConnectionService.newInstance();
const LoginForm = () =>{ 
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [isLoading, setLoading] = useState(false);
   const [result, setResult] = useState(null);
   const [formValues, setFormValues] = useState({});


   useEffect(() =>{
      loginFormservice.data = {
         navigate : navigate,
         dispatch : dispatch,
         setResult : setResult,
         setLoading : setLoading,
         setFormValues : setFormValues
      }
      //ConnectionService.init(navigate, dispatch, setResult, setLoading, setFormValues);
   },[dispatch, navigate]);
  
  return (
     <section className="LoginForm" id="login">
          <div className="space"></div>
          <div className="login-header title">Authentification</div>
          <div className="header-line"></div>
          <div className="login-body">
          {result && <Alert result={result} />}
          {!isLoading &&
              <form action="#" method="post" onSubmit={(e)=>loginFormservice.submitForm(e, formValues)}>
                   <div className="form-field">
                      <label>Votre e-mail</label>
                      <input type="text" 
                      name="login"
                      id="login" 
                      value={formValues.login || ""}
                      onChange={(e)=>loginFormservice.validateTextField(e, formValues)}/>
                   </div>
                   <div className="form-field">
                      <label>Votre mot de passe</label>
                      <input 
                      type="password" 
                      name="password" 
                      id="password" 
                      autoComplete='off' 
                      placeholder='Exemple : 1234*'
                      value={formValues.password || ""}
                      onChange={(e)=>loginFormservice.validateTextField(e, formValues)}
                   />
                   </div>
                   <div className="form-field">
                   <Link to="/recovery">Mot de passe oublié?</Link>
                   </div>
                   <div className="form-field">
                      <input type="submit" value="ENVOYER"/>
                   </div>
              </form>
          }
          {isLoading && <Loading text="Traitement en cours..." />}
          </div>
      </section>
  );

}

export default LoginForm;
