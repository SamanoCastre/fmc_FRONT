import React, {useState, useRef, useEffect} from "react";
import "./CodeForm.css";
import Alert from "../../Common/Alert/Alert";
import Loading from "../../Common/Loading/Loading";
import {useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { CodeService} from "../../services/CodeService";

const codeService = CodeService.newInstance();
const CodeForm = ({actionType = null, showCodeForm = null}) => {

  const {id,type, code} = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const formRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [formValues, setFormValues] = useState(null);

  useEffect(()=>{
    codeService.data = {
      dispatch : dispatch,
      navigate : navigate,
      showCodeForm: showCodeForm,
      setLoading : setLoading,
      setResult : setResult,
      setFormValues : setFormValues,
    }
    if(!formValues) {
      codeService.initForm(type, code, id, actionType);
    }
  },[code, dispatch, formValues]);

  return (
    <section className="CodeForm" id="CodeForm">
      <div className="CodeForm-header title">Code de validation </div>
      <div className="header-line"></div>
      <div className="CodeForm-body">
        {result && <Alert result={result} />}
        {!isLoading && formValues && (
          <form
            action=""
            method="post"
            onSubmit={e => codeService.submitForm(e, formValues)}
            ref={formRef}
            className="updte-code-form col-75"
          >
            <div className="form-field">
              <label>Saisir le code reçu par e-mail</label>
              <input
                type="number"
                name="code"
                autoComplete="off"
                placeholder="Exemple : 123456"
                value={formValues.code > 0 ? formValues.code : ""}
                onChange={(e)=>codeService.textChangeHandler(e, formValues)}
                required
              />
            </div>
            { codeService.isFormValid(formValues) &&
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

export default CodeForm;
