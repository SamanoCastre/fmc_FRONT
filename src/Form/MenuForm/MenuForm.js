import React, {useEffect, useState} from "react";

import {useSelector, useDispatch} from "react-redux";
import {MenuService} from "../../services/MenuService";
import {FmcValuesService} from "../../services/FmcValuesService";
import Loading from "../../Common/Loading/Loading";
import Alert from "../../Common/Alert/Alert";
import "./MenuForm.css";

const menuFormService = MenuService.newInstance();
const MenuForm = ({type}) => {
  const menu = useSelector(state => state.common_state.menu);
  const fmcValues = useSelector(state => state.fmc_value_state.fmcValues);
  const [formMenu, setFormMenu] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();
  const [localType, setLocalType] = useState(null);

  useEffect(() => {
    menuFormService.data = {
      dispatch: dispatch,
      setFormMenu: setFormMenu,
      setResult: setResult,
      setLoading: setLoading,
      setLocalType: setLocalType,
    };
    menuFormService.initForm(menu, type, localType);
  }, [type, menu, dispatch, localType]);

  return (
    <div className="container MenuForm">
      <h1>{FmcValuesService.getByKey(fmcValues, type + "-menu-key")}</h1>
      {result && <Alert result={result} />}
      {!isLoading && (
        <form
          method="post"
          action=""
          onSubmit={e => menuFormService.submitForm(e, formMenu)}
        >
          {formMenu.map((item, index) => (
            <div className="row" key={index}>
              <label htmlFor="champ">
                <i className={item.icon} />
              </label>
              <input
                type="text"
                name="champ"
                placeholder="Saisir l'item"
                value={item.text}
                onChange={e =>
                  menuFormService.validateTextField(e, formMenu, item.id)
                }
              />
            </div>
          ))}
          <div className="row submit-button">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      )}
      {isLoading && <Loading text="Traitement en cours..." />}
    </div>
  );
};
export default MenuForm;
