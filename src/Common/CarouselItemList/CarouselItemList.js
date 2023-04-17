import React, {useState, useEffect, useRef} from "react";

import {useSelector} from "react-redux";
import CarouselItem from "../CarouselItem/CarouselItem";
import Modal from "../Modal/Modal";
import CarouselItemForm from "../../Form/CarouselItemForm/CarouselItemForm";
import {CarouselService} from "../../services/CarouselService";
import { ERightTypes } from "../../Utils/Enums";
import "./CarouselItemList.css";
const service = CarouselService.newInstance();
const CarouselItemList = () => {
  const carouselItems = useSelector(
    state => state.carousel_state.carouselItems
  );
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalActive, setModalActive] = useState(false);
  const timer = useRef(null); // we can save timer in useRef and pass it to child
  const [stopTimer, setStopTimer] = useState(false);
  const page = useSelector(state => state.common_state.page);

  useEffect(() => {
    service.data = {setCurrentIndex : setCurrentIndex}
    service.initTimer(carouselItems, currentIndex, stopTimer, timer);
  }, [carouselItems, stopTimer, currentIndex]);

  const onCloseModal = () => {
    setModalActive(false);
  };

  const onOpenModal = (withContent = false) => {
    setModalActive(true);
  };

  return (
    <div className="CarouselItemList">
      {carouselItems && carouselItems[currentIndex] && (
        <>
          <div
            className="direction previous"
            onClick={() =>
              service.changeCarouselItem(-1, timer, carouselItems, currentIndex)
            }
          >
            <i className="fa fa-chevron-left"></i>
          </div>
          <div className="image-dots">
            {[...Array(carouselItems.length).keys()].map(index => (
              <i
                key={index}
                className={
                  index === currentIndex
                    ? "active fa fa-circle"
                    : "fa fa-circle"
                }
              ></i>
            ))}
          </div>
          <div className="CarouselItemList-wrapper">
            {carouselItems.map((carouselItem, index) => (
              <CarouselItem
                stopTimerCallBack={setStopTimer}
                className={index === currentIndex ? "show" : "hide"}
                carouselItem={carouselItem}
                key={index}
              />
            ))}
          </div>
          <div
            className="direction next"
            onClick={() =>
              service.changeCarouselItem(+1, timer, carouselItems, currentIndex)
            }
          >
            <i className="fa fa-chevron-right"></i>
          </div>
        </>
      )}
      { (!carouselItems || !carouselItems[currentIndex]) && 
      <div className="no-carousel">
        
        {page === "dashboard" && <>
          <div className="action-button-group">
          {  onlineUser && 
              onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
                <div
                  className="action-button add-button"
                  onClick={() => onOpenModal(false)}
                >
                  <i className="fa fa-plus"></i> créer
              </div> }
            </div>
            {isModalActive && (
                  <Modal onClose={onCloseModal}>
                    <CarouselItemForm
                      carouselItemIn={null}
                      onClose={onCloseModal}
                    />
                  </Modal>
                )}
        </>}
        <p className="empty">Aucune image à afficher dans le carousel</p></div>}
    </div>
  );
};

export default CarouselItemList;
