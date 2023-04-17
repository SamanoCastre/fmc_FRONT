import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import UserForm from "../../Form/UserForm/UserForm";
import Dialog from "../Dialog/Dialog";
import { ERightTypes, ERoleTypes } from "../../Utils/Enums";
import { UserService } from "../../services/UserService";
import "./UserCard.css";

const UserCard = ({user}) => {
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const page = useSelector(state => state.common_state.page);
  const [isModalActive, setModalActive] = useState(false);
  const [dialog, setDialog] = useState(null);
  const dispatch = useDispatch();
  const service = UserService.newInstance();
  
  useEffect(() => {
    service.data = {
      dispatch : dispatch,
      setDialog : setDialog
    }
  }, [dispatch, service]);

  const onCloseModal = () => {
    setModalActive(false);
  };

  return (
    <div  className="user-card">
      <div className="user-photo">
        <img src={user.urlFile} alt={user.username} />
        <div className="user-social">
          <a target="_blank" rel="noreferrer" href="/">
            <i className="fa fa-facebook"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <i className="fa fa-twitter"></i>
          </a>
          <a target="_blank" rel="noreferrer" href="/">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="user-name">{user.firstname + " " + user.lastname}</div>
      <div className="user-role">{ERoleTypes[user.role].value}</div>
      <div className="user-shortdescription">{user.description}</div>
      { page === "dashboard" && 
          <div className="action-button-group">
            <div className="action-button edit-button" onClick={()=>setModalActive(true)}> <i className="fa fa-edit"></i> </div>
            {onlineUser &&
              onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
            <div className="action-button delete-button" onClick={() => service.deleteRequest(user)}><i className="fa fa-trash-o"></i> </div>
            }
            {isModalActive && <Modal onClose={onCloseModal}><UserForm userIn = {user}/></Modal> }
            {dialog && (
            <Modal
              onClose={() => {
                setDialog(null);
              }}
              size="small"
            >
              <Dialog dialog={dialog} />
            </Modal>
          )}
          </div>
        }
    </div>
  );
};
export default UserCard;
