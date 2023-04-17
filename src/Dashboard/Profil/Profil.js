import React, {useEffect, useRef, useState} from "react";
import Loading from "../../Common/Loading/Loading";
import {useSelector, useDispatch} from "react-redux";
import {UserService} from "../../services/UserService";
import Modal from "../../Common/Modal/Modal";
import UserForm from "../../Form/UserForm/UserForm";
import {
  ActionTypes,
  ERightTypes,
  ERoleTypes,
} from "../../Utils/Enums";
import Alert from "../../Common/Alert/Alert";
import PasswordForm from "../../Form/PasswordForm/PasswordForm";
import EmailForm from "../../Form/EmailForm/EmailForm";
import CodeForm from "../../Form/CodeForm/CodeForm";
import "./Profil.css";
import { CustomDate } from "../../Utils/CustomDate";

const profilUserService = UserService.newInstance();
const Profil = () => {
  const onlineUser = useSelector(state => state.common_state.onlineUser);

  const dispatch = useDispatch();
  const formRef = useRef();
  const imageRef = useRef();

  const [isLoading, setLoading] = useState(true);
  const [togglePasswordForm, setTogglePasswordForm] = useState(false);
  const [toggleEmailForm, setToggleEmailForm] = useState(false);
  const [result, setResult] = useState(null);
  const [isModalActive, setModalActive] = useState(false);
  const [formValues, setFormValues] = useState(null);
  const [showEmailCodeForm, setShowEmailCodeForm] = useState(false);
  const [showPasswordCodeForm, setShowPasswordCodeForm] = useState(false);

  useEffect(() => {
    profilUserService.data = {
      dispatch: dispatch,
      setResult: setResult,
      setLoading: setLoading,
      setFormValues: setFormValues,
      formRef: formRef,
    };
    profilUserService.initProfilForm(onlineUser);
  }, [dispatch, onlineUser]);

  const onCloseModal = () => {
    setModalActive(false);
  };

  return (
    <div className="container Profil col-50">
      {result && <Alert result={result} />}
      {!isLoading && onlineUser && onlineUser.id > 0 && (
        <>
          <div className="row profil-header">
            <div className="action-button-group">
              <div
                className="action-button edit-button"
                onClick={() => setModalActive(true)}
              >
                {" "}
                <i className="fa fa-edit"></i>{" "}
              </div>
              <div className="action-button delete-button">
                <i className="fa fa-trash-o"></i>{" "}
              </div>
              {isModalActive && (
                <Modal onClose={onCloseModal}>
                  <UserForm userIn={onlineUser} />
                </Modal>
              )}
            </div>
            <div className="col-50 header-image">
              <img src={formValues.urlFile} alt={onlineUser.username} />
            </div>
            <div
              className="col-50 update-image-button"
              onClick={() => {
                imageRef.current.click();
              }}
            >
              Changer ma photo de profil
            </div>
            <form
              action=""
              method="post"
              onSubmit={e => profilUserService.submitPhotoProfilForm(e, imageRef)}
              ref={formRef}
              encType="multipart/form-data"
              className="update-image-form col-50"
            >
              <input
                type="file"
                className="image-input"
                name="mFile"
                ref={imageRef}
                onChange={e =>
                  profilUserService.validateFileChange(imageRef, formValues)
                }
                hidden
                accept="image/x-png,image/gif,image/jpeg,image/jpg"
              />
              {formValues.mFile && (
                <div className="form-field">
                  <input type="submit" value="VALIDER" />
                </div>
              )}
            </form>
            <div className="profil-creation-date">
              <small>
                Membre depuis le :{" "}
                { CustomDate.toString(onlineUser.createAt)}
              </small>{" "}
            </div>
          </div>
          <div className="row profil-body">
            <div className="col-100 profil-infos">
              <b>Mon nom : </b> {onlineUser.lastname}{" "}
            </div>
            <div className="col-100 profil-infos">
              <b>Mon prénom : </b> {onlineUser.firstname}{" "}
            </div>
            <div className="col-100 profil-infos">
              <b>Mon pseudo : </b>
              {onlineUser.username}
            </div>
            <div className="col-100 profil-infos">
              <b>Mon role dans FMC : </b> {ERoleTypes[onlineUser.role]?.value}
            </div>
            <div className="col-100 profil-infos">
              <b>Mon droit sur l'application FMC : </b>{" "}
              {ERightTypes[onlineUser.right]?.value}
            </div>
            <div className="col-100 profil-infos">
              <b>Ma desription : </b> {onlineUser.desription}
            </div>
            <div className="col-100 profil-infos">
              <b>Mon e-mail : </b> {onlineUser.email} -
              <span
                className="update-password-button"
                onClick={() => {
                  setToggleEmailForm(!toggleEmailForm);
                }}
              >
                {toggleEmailForm ? " annuler?" : " modifier?"}
              </span>
            </div>
            <div className="col-100 profil-password">
              {toggleEmailForm && !showEmailCodeForm && (
                <EmailForm
                  type={ActionTypes.UPDATE_EMAIL}
                  showCodeForm={setShowEmailCodeForm}
                />
              )}
            </div>
            <div className="col-100 profil-password">
              {showEmailCodeForm && (
                <CodeForm
                  type={ActionTypes.UPDATE_EMAIL}
                  showCodeForm={setShowEmailCodeForm}
                />
              )}
            </div>
            <div className="col-100 profil-infos">
              <b>Mon mot de passe : </b> ****** -
              <span
                className="update-password-button"
                onClick={() => {
                  setTogglePasswordForm(!togglePasswordForm);
                }}
              >
                {togglePasswordForm ? " annuler?" : " modifier?"}
              </span>
            </div>
            <div className="col-100 profil-password">
              {togglePasswordForm && !showPasswordCodeForm && (
                <PasswordForm
                  type={ActionTypes.UPDATE_PASSWORD}
                  showCodeForm={setShowPasswordCodeForm}
                />
              )}
            </div>
            <div className="col-100 profil-password">
              {showPasswordCodeForm && (
                <CodeForm
                  type={ActionTypes.UPDATE_PASSWORD}
                  showCodeForm={setShowEmailCodeForm}
                />
              )}
            </div>
          </div>
        </>
      )}
      {isLoading && <Loading text="Chargement en cours..." />}
    </div>
  );
};
export default Profil;
