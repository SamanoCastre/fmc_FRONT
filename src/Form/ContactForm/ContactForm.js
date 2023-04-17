import React, {useEffect, useRef, useState} from "react";
import "./ContactForm.css";
import {ContactService} from "../../services/ContactService";
import Alert from "../../Common/Alert/Alert";
import {useDispatch} from "react-redux";
import Loading from "../../Common/Loading/Loading";

const ContactForm = ({contact = null}) => {
  const [formValues, setFormValues] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();
  const formRef = useRef();
  const contactFormService = ContactService.newInstance();

  useEffect(() => {
    contactFormService.data = {
      dispatch: dispatch,
      setResult: setResult,
      setLoading: setLoading,
      setFormValues: setFormValues,
      formRef: formRef,
    };
    if(!formValues) {
      contactFormService.initForm(contact);
    }
  }, [contact, contactFormService, dispatch, formValues]);

  return (
    <section className="ContactForm" id="contact">
      {contact === null && <div className="space"></div> }
      <div className="contact-header title">
        {contact === null ? "Contactez-nous" : "Faire une réponse"}
      </div>
      <div className="header-line"></div>
      
      <div className="contact-body">
        {result && <Alert result={result} />}
        {!isLoading && (
          <form
            action="#"
            method="post"
            onSubmit={e =>
              contactFormService.submitForm(e, formValues, contact === null)
            }
            ref={formRef}
          >
            {contact === null && (
              <>
                <div className="form-field">
                  <label>Votre nom</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Exemple : Jean"
                    value={formValues.name || ""}
                    onChange={e =>
                      contactFormService.validateTextField(e, formValues)
                    }
                    required
                  />
                </div>
                <div className="form-field">
                  <label>Votre adresse e-mail</label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="Exemple : jean31@gmail.com"
                    value={formValues.email || ""}
                    onChange={e =>
                      contactFormService.validateTextField(e, formValues)
                    }
                    required
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  />
                </div>
                <div className="form-field">
                  <label>Votre sujet</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Exemple: Signaler un bogue"
                    value={formValues.subject || ""}
                    onChange={e =>
                      contactFormService.validateTextField(e, formValues)
                    }
                    required
                    pattern=".{10,}"
                  />
                </div>
                <div className="form-field">
                  <label>Votre message</label>
                  <textarea
                    name="text"
                    id="text"
                    rows="6"
                    placeholder="Le corps de votre message..."
                    value={formValues.text || ""}
                    onChange={e =>
                      contactFormService.validateTextField(e, formValues)
                    }
                    required
                  ></textarea>
                </div>
              </>
            )}
            {contact !== null && (
              <>
                <input type="hidden" name="id" id="id" value={formValues.id} />
                <div className="form-field">
                  <label>Votre Réponse</label>
                  <textarea
                    name="response"
                    id="response"
                    rows="6"
                    placeholder="Ecrire votre réponse ici... (pas besoin de formule de politesse, le template d'envoi de mails s'en chargera)."
                    value={formValues.response || ""}
                    onChange={e =>
                      contactFormService.validateTextField(e, formValues)
                    }
                    required
                  ></textarea>
                </div>
              </>
            )}
            <div className="form-field">
              <input type="submit" value="ENVOYER MESSAGE" />
            </div>
          </form>
        )}
        {isLoading && <Loading text="Traitement en cours..." />}
      </div>
    </section>
  );
};
export default ContactForm;
