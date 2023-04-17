import React, { useEffect, useState } from "react";
import {CustomDate} from "../../Utils/CustomDate";
import ContactForm from "../../Form/ContactForm/ContactForm";
import { ContactService } from "../../services/ContactService";
import { ERightTypes } from "../../Utils/Enums";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "../../Common/Dialog/Dialog";
import Modal from "../../Common/Modal/Modal";

import "./Contact.css";
const Contact = ({contact}) => {
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const [dialog, setDialog] = useState(null);
  const dispatch = useDispatch();
  const contactService = ContactService.newInstance();

  useEffect(()=> {
     contactService.data = {
       setDialog : setDialog,
       dispatch : dispatch
     }
  },[contactService, dispatch]);

  return (
    <section className="Contact container" id="contact">
      {contact && 
        <>

          <div className="action-button-group">
          { onlineUser &&
            onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
          <div
            className="action-button delete-button"
            onClick={() => contactService.deleteRequest(contact)}
          >
            <i className="fa fa-trash-o"></i>{" "}
          </div> }
          </div>
          <div className="row contact-request">
            <div className="row contact-header-details">
              <span className="message-indicator request">
                Message de {contact.name}
              </span>
              <span className="contact-date">
                <b>Le</b> {CustomDate.toString(contact.createAt)}
              </span>
            </div>
            <div className="row contact-subject">
              <b>Sujet : </b>
              {contact.subject}
            </div>
            <div className="row contact-text" dangerouslySetInnerHTML={{__html: contact.text.replace(/(?:\r\n|\r|\n)/g, "<br/>")}} />
          </div>
          {contact.response && (
            <div className="row contact-response">
              <div className="row contact-header-details">
                <span className="message-indicator response">
                  Réponse de : {contact.responseBy.username}
                </span>
                <span className="contact-date">
                  <b>Le</b> {CustomDate.toString(contact.responseAt)}
                </span>
              </div>
              <div className="row contact-text" dangerouslySetInnerHTML={{__html: contact.response.replace(/(?:\r\n|\r|\n)/g, "<br/>")}} />
            </div>
          )}
          {!contact.response && onlineUser.contactAddressee && <ContactForm contact={contact} />}
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
        </>
      }
    </section>
  );
};

export default Contact;
