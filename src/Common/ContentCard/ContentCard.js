import React, {useEffect, useState} from "react";
import Modal from "../Modal/Modal";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";
import ContentForm from "../../Form/ContentForm/ContentForm";
import {ContentService} from "../../services/ContentService";
import Dialog from "../Dialog/Dialog";
import "./ContentCard.css";
import { ERightTypes } from "../../Utils/Enums";


const ContentCard = ({content}) => {
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const page = useSelector(state => state.common_state.page);
  const [isModalActive, setModalActive] = useState(false);
  const [dialog, setDialog] = useState(null);
  const dispatch = useDispatch();
  const service = ContentService.newInstance();
  

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
    <div className={"content-card content-card-" + content.type}>
      <div className="content-photo">
        <img
          src={ContentService.getCardImage(content)}
          alt={ContentService.getCardImageAlt(content)}
        />
      </div>
      <div className="content-wrapper">
        <div className="content-title">{content.title}</div>
        <div className="content-shortdescription">
          { ContentService.getCardDescription(content)}
        </div>
        <div className="content-date">Date : {content.createAt}</div>
        <Link className="content-plus-button" to={"/contents/" + content.id}>
          voir plus...
        </Link>
      </div>
      {page === "dashboard" && (
        <div className="action-button-group">
          <div
            className="action-button edit-button"
            onClick={() => setModalActive(true)}
          >
            {" "}
            <i className="fa fa-edit"></i>{" "}
          </div>
          { onlineUser &&
            onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
          <div
            className="action-button delete-button"
            onClick={() => service.deleteRequest(content)}
          >
            <i className="fa fa-trash-o"></i>{" "}
          </div> }
          {isModalActive && (
            <Modal onClose={onCloseModal} size="medium">
              <ContentForm contentIn={content} />
            </Modal>
          )}
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
      )}
    </div>
  );
};

export default ContentCard;
