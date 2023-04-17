import React, {useEffect, useRef, useState} from "react";
import Loading from "../../Common/Loading/Loading";
import {useDispatch, useSelector} from "react-redux";
import {UserService} from "../../services/UserService";
import "./UserForm.css";
import {ERightTypes, ERoleTypes} from "../../Utils/Enums";
import Alert from "../../Common/Alert/Alert";

const userFormService = UserService.newInstance();
const UserForm = ({userIn = null}) => {
  const [formValues, setFormValues] = useState(null);
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();

  const imageRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    userFormService.data = {
      dispatch: dispatch,
      setResult: setResult,
      setLoading: setLoading,
      setFormValues: setFormValues,
      formRef: formRef,
    };
    userFormService.initForm(userIn);
  }, [dispatch, userIn]);

  return (
    <div className="container UserForm">
      {result && <Alert result={result} />}
      {!isLoading && formValues && (
        <form
          action=""
          method="post"
          onSubmit={e => userFormService.subSubmitForm(e)}
          ref={formRef}
          encType="multipart/form-data"
        >
          <div className="row title">
            <h2>
              {formValues.id === 0 ? "Création membre" : "Mise à jour membre"}
            </h2>
          </div>

          <div className="row field">
            <label htmlFor="lastname">Nom de l'utilisateur</label>
            <input type="hidden" name="id" value={formValues.id} />
            <input type="hidden" name="onlineUserId" value={onlineUser.id} />
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Veuillez saisir le nom de famille"
              value={formValues.lastname ? formValues.lastname : ""}
              onChange={e => userFormService.validateTextChange(e, formValues)}
            />
          </div>
          <div className="row field">
            <label htmlFor="firstname">Prénom de l'utilisateur</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Veuillez saisir le prénom"
              value={formValues.firstname ? formValues.firstname : ""}
              onChange={e => userFormService.validateTextChange(e, formValues)}
            />
          </div>
          {formValues.id > 0 && (
            <div className="row field">
              <label htmlFor="username">Pseudo de l'utilisateur</label>
              <input
                type="text"
                id="username"
                name="username"
                placeholder="Veuillez saisir le pseudo"
                value={formValues.username ? formValues.username : ""}
                onChange={e =>
                  userFormService.validateTextChange(e, formValues)
                }
                disabled = {onlineUser.id !== formValues.id}
              />
            </div>
          )}

          <div className="row field">
            <label htmlFor="email">E-mail de l'utilisateur</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Veuillez saisir un e-mail valide"
              value={formValues.email ? formValues.email : ""}
              onChange={e => userFormService.validateTextChange(e, formValues)}
              disabled = {formValues.id > 0}
            />
          </div>
          <div className="row field">
            <label htmlFor="role">Role de l'utilisateur</label>
            <select
              type="role"
              id="role"
              name="role"
              onChange={e => userFormService.validateTextChange(e, formValues)}
              value={formValues.role}
              disabled = {onlineUser.right?.toUpperCase() !== ERightTypes.ADMINISTRATOR.key}
            >
              {Object.keys(ERoleTypes).map((role, index) => (
                <option key={index} value={role} name="role">
                  {ERoleTypes[role].value}
                </option>
              ))}
            </select>
          </div>
          <div className="row field">
            <label htmlFor="right">Droits de l'utilisateur</label>

            <select
              type="right"
              id="right"
              name="right"
              onChange={e => userFormService.validateTextChange(e, formValues)}
              value={formValues.right}
              disabled = {onlineUser.right?.toUpperCase() !== ERightTypes.ADMINISTRATOR.key}
            >
              {Object.keys(ERightTypes).map((right, index) => (
                <option key={index} value={right} name="right">
                  {ERightTypes[right].value}
                </option>
              ))}
            </select>
          </div>
          <div className="row">
            <input
              type="checkbox"
              name="contactAddressee"
              id="contactAddressee"
              checked={formValues.contactAddressee}
              onChange={e =>
                userFormService.toggleCheckboxChange(e, formValues)
              }
              disabled = {onlineUser.right?.toUpperCase() !== ERightTypes.ADMINISTRATOR.key}
            />
            <label htmlFor="right">
              Droit de répondre à un message au nom de FMC Haïti
            </label>
          </div>
          <div className="description-wrapper row field">
            {formValues.urlFile && formValues.urlFile.length > 0 && (
              <div className="description-image-wrapper col-20">
                <img src={formValues.urlFile} alt={formValues.lastname} />
                { onlineUser.id === formValues.id &&
                <div className="action-button-group">
                  <div
                    className="action-button edit-button"
                    onClick={e => {
                      imageRef.current.click();
                    }}
                  >
                    {" "}
                    <i className="fa fa-edit"></i>
                  </div>
                  <div className="action-button delete-button">
                    <i className="fa fa-trash-o"></i>
                  </div>
                </div>}
                <input
                  type="file"
                  className="image-input"
                  name="mFile"
                  hidden
                  ref={imageRef}
                  onChange={e =>
                    userFormService.validateFileChange(imageRef, formValues)
                  }
                  disabled = {onlineUser.id !== formValues.id}
                  accept="image/x-png,image/gif,image/jpeg,image/jpg"
                />
              </div>
            )}
            <div
              className={
                formValues.urlFile && formValues.urlFile.length > 0
                  ? "textarea-box col-75"
                  : "col-100"
              }
            >
              <label htmlFor="description">Description de l'utilisateur</label>
              <textarea
                type="description"
                id="description"
                name="description"
                placeholder="Veuillez saisir la description"
                value={formValues.description ? formValues.description : ""}
                onChange={e =>
                  userFormService.validateTextChange(e, formValues)
                }
                rows={6}
              />
            </div>
          </div>
          <div className="row field">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      )}
      {isLoading && <Loading text="Traitement en cours..." />}
    </div>
  );
};
export default UserForm;
