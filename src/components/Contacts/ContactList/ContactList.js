import React, { useState, useEffect }from 'react';
import './ContactList.css';
import ContactService from '../../../services/ContactService';

const ContactList = () => {

  const [Contacts, setContacts] = useState([]);
  

  useEffect(() => {
    const service = new ContactService();
    setContacts(service.list());

  },[]);
  
  return (
  <div className="ContactList" id="Contacts">
        <div className="space"></div>
        <div className="ContactList-header title">Nos projets</div>
        <div className="header-line"></div>
        <div className="ContactList-body">
             {
              Contacts.map((aContact,index) =>
                <div key={index} className="Contact-card">
                    <div className="Contact-photo"><img src={"images/Contacts/" + aContact.photo} alt={aContact.title} /></div>
                    <div className="Contact-wrapper">
                        <div className="Contact-title">{aContact.title}</div>
                        <div className="Contact-shortdescription">{aContact.description}</div>
                        <a className="Contact-plus-button" href="/Contacts/5">cliquez pour voir...</a>
                    </div>
                </div>
              )
             }
        </div>
  </div>
);
}

export default ContactList;
