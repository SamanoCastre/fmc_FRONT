import React, {useState, useRef, useEffect} from "react";
import Alert from "../../Common/Alert/Alert";
import Loading from "../../Common/Loading/Loading";
import {ActionTypes} from "../../Utils/Enums";
import {useNavigate, useParams} from "react-router-dom";
import {PasswordService} from "../../services/PasswordService";
import "./PasswordForm.css";

const passwordService = PasswordService.newInstance();
const PasswordForm = ({type, showCodeForm = null}) => {
  const formRef = useRef();
  const navigate = useNavigate();
  const {id, code} = useParams();
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const [formValues, setFormValues] = useState({
    password: null,
    newPassword: null,
    passwordCheck: null,
  });

  useEffect(() => {
    passwordService.data = {
      navigate: navigate,
      showCodeForm: showCodeForm,
      setLoading: setLoading,
      setResult: setResult,
      setFormValues: setFormValues,
      id: id,
      code: code,
      type: type,
    };
    passwordService.initForm(formValues);
  }, [code, formValues, id, navigate, showCodeForm, type]);

  return (
    <section className="PasswordForm" id="PasswordForm">
      <div className="PasswordForm-header title">Mot de passe </div>
      <div className="header-line"></div>
      <div className="PasswordForm-body">
        {result && <Alert result={result} />}
        {!isLoading && (
          <form
            action=""
            method="post"
            onSubmit={e => passwordService.submitForm(e, formValues)}
            ref={formRef}
            className="password-form col-75"
          >
            {type === ActionTypes.UPDATE_PASSWORD && (
              <div className="form-field">
                <label>Mon mot de passe actuel</label>
                <input
                  type="password"
                  name="password"
                  value={formValues.password || ""}
                  placeholder="Exemple : 1234*"
                  onChange={e =>
                    passwordService.textChangeHandler(e, formValues)
                  }
                />
              </div>
            )}
            <div className="form-field">
              <label>Nouveau mot de passe</label>
              <input
                type="password"
                name="newPassword"
                autoComplete="off"
                placeholder="Exemple : 1234*"
                value={formValues.newPassword || ""}
                onChange={e => passwordService.textChangeHandler(e, formValues)}
              />
            </div>
            <div className="form-field">
              <label>Nouveau mot de passe (vérification)</label>
              <input
                type="password"
                name="passwordCheck"
                id="passwordCheck"
                autoComplete="off"
                placeholder="Saisir le même mot de passe"
                value={formValues.passwordCheck || ""}
                onChange={e => passwordService.textChangeHandler(e, formValues)}
              />
            </div>
            {passwordService.isFormValid(formValues) && (
              <div className="form-field">
                <input type="submit" value="ENVOYER" />
              </div>
            )}
          </form>
        )}
        {isLoading && <Loading text="Traitement en cours..." />}
      </div>
    </section>
  );
};
export default PasswordForm;
