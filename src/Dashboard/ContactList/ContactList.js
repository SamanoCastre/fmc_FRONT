import React, {useState, useEffect} from "react";
import "./ContactList.css";
import {useSelector, useDispatch} from "react-redux";
import Contact from "../Contact/Contact";
import Loading from "../../Common/Loading/Loading";
import Alert from "../../Common/Alert/Alert";
import {ContactService} from "../../services/ContactService";

const contactListService = ContactService.newInstance();
const ContactList = () => {
  const contacts = useSelector(state => state.contact_state.contacts);
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    contactListService.data = {
      dispatch: dispatch,
      setLoading: setLoading,
      setResult: setResult,
    };
    contactListService.list();
  }, [dispatch]);

  return (
    <div className="ContactList" id="Contacts">
      <div className="ContactList-header title">Les Messages</div>
      <div className="header-line"></div>
      <div className="ContactList-body">
        {result && <Alert result={result} />}
        {contacts.map((aContact, index) => (
          <Contact contact={aContact} key={index} />
        ))}
        {isLoading && <Loading text="Traitement en cours..." />}
      </div>
    </div>
  );
};

export default ContactList;
