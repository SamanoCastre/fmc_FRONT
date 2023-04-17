import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import Modal from "../Modal/Modal";
import CarouselItemForm from "../../Form/CarouselItemForm/CarouselItemForm";
import Dialog from "../Dialog/Dialog";
import {CarouselService} from "../../services/CarouselService";
import "./CarouselItem.css";
import { ERightTypes } from "../../Utils/Enums";

const CarouselItem = ({carouselItem, className, stopTimerCallBack}) => {
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const page = useSelector(state => state.common_state.page);
  const [isModalActive, setModalActive] = useState(false);
  const [item, setItem] = useState(null);
  const [dialog, setDialog] = useState(null);
  const dispatch = useDispatch();
  const service = CarouselService.newInstance();

  useEffect(() => {
    service.data = {
      dispatch: dispatch,
      setDialog: setDialog,
      stopTimerCallBack: stopTimerCallBack,
    };
  }, [carouselItem, dispatch, service, stopTimerCallBack]);

  const onCloseModal = () => {
    setModalActive(false);
    stopTimerCallBack(false);
  };

  const onOpenModal = (withContent = false) => {
    stopTimerCallBack(true);
    setModalActive(true);
    setItem(withContent ? carouselItem : null);
  };

  return (
    <div className={"CarouselItem " + className}>
      {carouselItem && (
        <>
          {page === "dashboard" && (
            <div className="action-button-group">
              {  onlineUser && 
              onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
              <div
                className="action-button add-button"
                onClick={() => onOpenModal(false)}
              >
                <i className="fa fa-plus"></i> créer
              </div> }
              <div
                className="action-button edit-button"
                onClick={() => onOpenModal(true)}
              >
                <i className="fa fa-edit"></i> modifier
              </div>
              {  onlineUser && 
              onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
              <div
                className="action-button delete-button"
                onClick={() => service.deleteRequest(carouselItem)}
              >
                <i className="fa fa-trash-o"></i> supprimer
              </div> }
              {isModalActive && (
                <Modal onClose={onCloseModal}>
                  <CarouselItemForm
                    carouselItemIn={item}
                    onClose={onCloseModal}
                  />
                </Modal>
              )}
              {dialog && (
                <Modal
                  onClose={() => {
                    setDialog(null);
                    stopTimerCallBack(false);
                  }}
                  size="small"
                >
                  <Dialog dialog={dialog} />
                </Modal>
              )}
            </div>
          )}
          <div className="image-text">
            <div className="image-title">{carouselItem.title}</div>
            <div className="image-description">{carouselItem.description}</div>
          </div>
          <img
            className="active"
            src={carouselItem.urlFile}
            alt="carousel item"
          />
        </>
      )}
    </div>
  );
};

export default CarouselItem;
