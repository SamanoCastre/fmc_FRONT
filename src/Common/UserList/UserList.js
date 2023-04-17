import React, {useEffect, useState} from "react";
import "./UserList.css";
import {UserService} from "../../services/UserService";
import {useSelector} from "react-redux";
import UserCard from "../Usercard/UserCard";
import Modal from "../Modal/Modal";
import UserForm from "../../Form/UserForm/UserForm";
import Alert from "../Alert/Alert";
import Loading from "../Loading/Loading";
import { ERightTypes } from "../../Utils/Enums";

const userListService = UserService.newInstance();
const UserList = ({type = "team"}) => {
  const users = useSelector(state => state.user_state.users);
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const page = useSelector(state => state.common_state.page);
  const [isModalActive, setModalActive] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const fmcValues = useSelector(state => state.fmc_value_state.fmcValues);
  const [data, setData] = useState(null);
  const [title, setTitle] = useState(null);

  useEffect(() => {
    userListService.data = {
      setData: setData,
      setTitle: setTitle,
      setLoading: setLoading,
      setResult: setResult,
    };
    userListService.initList(users, fmcValues, type);
  }, [users, type, fmcValues]);

  const onCloseModal = () => {
    setModalActive(false);
  };

  return (
    <section className="UserList" id={type.toLowerCase()}>
      {page !== "dashboard" && <div className="space"></div>}
      {page === "dashboard" && (
        <div className="action-button-group">
          {  onlineUser && 
              onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
          <div
            className="action-button add-button"
            onClick={() => setModalActive(true)}
          >
            {" "}
            <i className="fa fa-plus"></i> Ajouter un nouveau{" "}
          </div>
        }
          {isModalActive && (
            <Modal onClose={onCloseModal}>
              <UserForm />
            </Modal>
          )}
        </div>
      )}
      <div className="user-header title">{title}</div>
      <div className="header-line"></div>
      <div className="UserList-body">
        {result && <Alert result={result} />}
        {!isLoading && data &&
          data.map((user, index) => <UserCard user={user} key={index} />)}
        {isLoading && <Loading text="Traitement en cours..." />}
      </div>
    </section>
  );
};

export default UserList;
