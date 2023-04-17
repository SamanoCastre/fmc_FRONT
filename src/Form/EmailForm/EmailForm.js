import React, {useState, useRef, useEffect} from "react";
import "./EmailForm.css";
import Alert from "../../Common/Alert/Alert";
import Loading from "../../Common/Loading/Loading";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import { EmailService } from "../../services/EmailService";

const emailService = EmailService.newInstance();
const EmailForm = ({type, showCodeForm = null}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state=> state.common_state.onlineUser);
  const formRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [formValues, setFormValues] = useState({
    email: null,
    emailCheck: null,
  });

  useEffect(()=> {
    emailService.data = {
      dispatch : dispatch,
      navigate : navigate,
      showCodeForm : showCodeForm,
      setLoading : setLoading,
      setResult : setResult,
      setFormValues : setFormValues,
      user : user,
      type : type,
    }
    emailService.initForm(type, formValues);
  },[dispatch, formValues, navigate, showCodeForm, type, user]);


  return (
    <section className="EmailForm" id="EmailForm">
      <div className="EmailForm-header title">Adresse E-mails </div>
      <div className="header-line"></div>
      <div className="EmailForm-body">
        {result && <Alert result={result} />}
        {!isLoading && (
          <form
            action=""
            method="post"
            onSubmit={e => emailService.submitForm(e, formValues)}
            ref={formRef}
            className="update-email-form col-75"
          >
            <div className="form-field">
              <label>Votre adresse E-mail</label>
              <input
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Exemple : johndoe@gmail.com"
                value={formValues.email || ""}
                onChange={(e)=>emailService.textChangeHandler(e, formValues)}
                required
              />
            </div>
            <div className="form-field">
              <label>Votre adresse E-mail (vérification)</label>
              <input
                type="email"
                name="emailCheck"
                id="emailCheck"
                autoComplete="off"
                placeholder="Saisir le même E-mail"
                value={formValues.emailCheck || ""}
                onChange={(e)=>emailService.textChangeHandler(e, formValues)}
                required
              />
            </div>
			{ emailService.isFormValid(formValues) &&
				<div className="form-field">
				<input type="submit" value="ENVOYER" />
				</div>
			}
          </form>
        )}
        {isLoading && <Loading text="Traitement en cours..." />}
      </div>
    </section>
  );
};

export default EmailForm;
