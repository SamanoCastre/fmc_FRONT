import React, {useEffect, useState, useRef} from "react";
import {useSelector, useDispatch} from "react-redux";
import {FmcValuesService} from "../../services/FmcValuesService";
import {EFMCValuesTypes} from "../../Utils/Enums";
import Loading from "../../Common/Loading/Loading";
import Alert from "../../Common/Alert/Alert";
import { ERightTypes } from "../../Utils/Enums";
import "./FmcValuesForm.css";

const fmcValuesFormService = FmcValuesService.newInstance();
const FmcValuesForm = ({type}) => {
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const fmcValues = useSelector(state => state.fmc_value_state.fmcValues);
  const [formValues, setFormValues] = useState([]);
  const [localType, setLocalType] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();
  const formRef = useRef();

  useEffect(() => {
    fmcValuesFormService.data = {
      dispatch: dispatch,
      setResult: setResult,
      setLoading: setLoading,
      setFormValues: setFormValues,
      setLocalType: setLocalType,
      fmcValues: fmcValues,
      formRef: formRef,
    };
    //ContentService.onClose = onClose;
    fmcValuesFormService.initFmcValues(localType, type);
  }, [dispatch, fmcValues, localType, type]);

  return (
    <div className="container FmcValuesForm">
      <h1>{FmcValuesService.getByKey(fmcValues, type + "-key-list")}</h1>
      {result && <Alert result={result} />}
      {!isLoading && (
        <form
          method="post"
          action=""
          onSubmit={e =>
            fmcValuesFormService.submitForm(e, formValues, localType)
          }
          ref={formRef}
        >
          
          {formValues.map(
            (fmcValue, index) =>
              fmcValue.active && (
                <div className="row" key={index}>
                  <label htmlFor="fmcValue">
                    <i className={FmcValuesService.getIcon(fmcValue.type)} />
                  </label>
                  <input
                    type="text"
                    name="text"
                    placeholder={"Saisir votre " + fmcValue.type}
                    value={fmcValue.text}
                    onChange={e =>
                      fmcValuesFormService.validateTextField(
                        e,
                        formValues,
                        fmcValue.id
                      )
                    }
                  />
                  {  onlineUser && 
              onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
                  type !== EFMCValuesTypes.Label && (
                    <i
                      className="fa fa-minus-circle remove-button"
                      onClick={() =>
                        fmcValuesFormService.toggleInput(
                          formValues,
                          fmcValue.id
                        )
                      }
                      title="supprimer ce champ"
                    />
                  )}
                </div>
              )
          )}
          {  onlineUser && 
              onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
          <div className="row add-buttons">
            {formValues.map(
              (fmcValue, index) =>
                !fmcValue.active && (
                  <div
                    className="add-button-item"
                    onClick={e =>
                      fmcValuesFormService.toggleInput(formValues, fmcValue.id)
                    }
                    key={index}
                  >
                    <i className="fa fa-plus-circle " />
                    <div>
                      Ajouter {fmcValue.type} -{" "}
                      <i className={FmcValuesService.getIcon(fmcValue.type)} />
                    </div>
                  </div>
                )
            )}
          </div>}
          <div className="row submit-button">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      )}
      {isLoading && <Loading text="Traitement en cours..." />}
    </div>
  );
};
export default FmcValuesForm;
