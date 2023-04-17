import React from 'react';
import './Modal.css';

const Modal = ({size = "large", children, onClose}) => {
  //const children = props.children;
  //const onClose = props.onClose;

  const shouldClose = (event) => {
    let target = event.target;
    if(target.className.includes('Modal')){
      onClose();
    }
  }

  return (
    <div className={"Modal modal " + size}  onClick={shouldClose}>
          <div className="modal-content">
            <div className="close" onClick={onClose}><i className="fa fa-times"></i></div>
            <div>{children}</div>
          </div>
        </div>
      
  );
};

export default Modal;
