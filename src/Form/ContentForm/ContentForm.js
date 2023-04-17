import React, {useEffect, useState, useRef} from "react";
import "./ContentForm.css";
import SectionArea from "../SectionArea/SectionArea";
import {useDispatch} from "react-redux";
import Loading from "../../Common/Loading/Loading";
import {ContentService} from "../../services/ContentService";
import Alert from "../../Common/Alert/Alert";

const contentFormService = ContentService.newInstance();
const ContentForm = ({contentIn = null}) => {
  const [formValues, setFormValues] = useState();
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();
  const titleRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    contentFormService.data = {
      dispatch : dispatch,
      setResult : setResult,
      setLoading : setLoading,
      setFormValues : setFormValues,
      formRef : formRef,
    }
    //ContentService.onClose = onClose;
    contentFormService.initForm(contentIn);
  }, [contentIn, dispatch]);

  const onSectionChange = section => {
    contentFormService.onSectionChange(section, formValues);
  };

  const oneMoreSection = order => {
    contentFormService.oneMoreSection(order, formValues);
  };

  return (
    <div className="container ContentForm">
      {result && <Alert result={result} />}
      {!isLoading && formValues && (
        <form
          action=""
          method="post"
          onSubmit={e => contentFormService.submitForm(e, formValues)}
          ref={formRef}
          encType="multipart/form-data"
        >
          <input type="hidden" name="id" value={formValues.id} />
          <input type="hidden" name="type" value={formValues.type} />
          <input type="hidden" name="MAX_FILE_SIZE" value="2097152" />
          <div className="row">
            <input
              ref={titleRef}
              type="text"
              id="content-title"
              name="title"
              placeholder="Titre du contenu"
              value={formValues.title}
              onChange={() => contentFormService.validateTextField(titleRef, formValues)}
            />
          </div>

          <div className="row">
            <label htmlFor="subject">
              Description du contenu (liste de sections) :{" "}
            </label>
          </div>
          {formValues.sections.map((section, index) => (
            <div className="row section-row" key={index}>
              <SectionArea
                section={section}
                onSectionChange={onSectionChange}
                oneMoreSection={oneMoreSection}
                key={index}
                position={index}
              />
              <div>
              <i
                className="fa fa-minus-circle remove-button"
                onClick={() =>
                  contentFormService.onRemoveSection(section, formValues)
                }
                title="supprimer ce section"
              />
              </div>
            </div>
          ))}
          {formValues.sections.length === 0 && (
            <div className="row add-buttons">
              <div
                className="add-button-item section-add-button-item"
                onClick={() => contentFormService.oneMoreSection(0, formValues)}
              >
                <i className="fa fa-plus-circle " />
                <div>Ajouter une nouvelle section</div>
              </div>
            </div>
          )}
          <div className="row">
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      )}
      {isLoading && <Loading text="Traitement en cours..." />}
    </div>
  );
};
export default ContentForm;
