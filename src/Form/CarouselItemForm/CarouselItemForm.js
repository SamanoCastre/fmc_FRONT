import React, {useEffect, useState, useRef} from "react";
import {useDispatch} from "react-redux";
import Alert from "../../Common/Alert/Alert";
import Loading from "../../Common/Loading/Loading";
import {CarouselService} from "../../services/CarouselService";
import "./CarouselItemForm.css";

const carouselItemFormService = CarouselService.newInstance();
const CarouselItemForm = ({carouselItemIn = null, onClose}) => {
  const [formValues, setFormValues] = useState();
  const [isLoading, setLoading] = useState(true);
  const [result, setResult] = useState(null);
  const dispatch = useDispatch();

  const imageRef = useRef();
  const formRef = useRef();

  useEffect(() => {
    carouselItemFormService.data = {
      dispatch : dispatch,
      setResult : setResult,
      setLoading : setLoading,
      setFormValues : setFormValues,
      formRef : formRef,
      onClose : onClose,
    }
    carouselItemFormService.initForm(carouselItemIn);
  }, [carouselItemIn, dispatch, onClose]);

  return (
    <div className="container CarouselItemForm">
      {result && <Alert result={result} />}
      {!isLoading && formValues && (
        <form
          action=""
          method="post"
          ref={formRef}
          onSubmit={e => carouselItemFormService.submitForm(e)}
          encType="multipart/form-data"
        >
          <div className="row">
            <h2>Notre Carousel de présentation</h2>
          </div>
          <div className="row">
            <label htmlFor="titre">Titre</label>
            <input type="hidden" name="id" id="id" value={formValues.id} />
            <input
              type="text"
              id="title"
              name="title"
              placeholder="Saisir le titre"
              value={formValues.title}
              onChange={e =>
                carouselItemFormService.validateTextField(e, formValues)
              }
            />
          </div>
          <div className="row">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              id="description"
              name="description"
              placeholder="Saisir la description"
              value={formValues.description}
              onChange={e =>
                carouselItemFormService.validateTextField(e, formValues)
              }
            />
          </div>
          <div className="row">
            <label htmlFor="order">Ordre (Ordre de défilement des imges)</label>
            <input
              type="number"
              id="order"
              name="order"
              placeholder="Saisir la description"
              value={formValues.order}
              onChange={e =>
                carouselItemFormService.validateTextField(e, formValues)
              }
            />
          </div>
          {formValues.urlFile && (
            <div className="row">
              <div className="image-preview">
                <img src={formValues.urlFile} alt="" />
                <div className="action-button-group">
                  <div
                    className="action-button edit-button"
                    onClick={e => {
                      imageRef.current.click();
                    }}
                  >
                    {" "}
                    <i className="fa fa-edit"></i>
                  </div>
                </div>
              </div>
            </div>
          )}
          {!formValues.urlFile && (
            <div className="row add-buttons">
              <div
                className="add-button-item"
                onClick={e => {
                  imageRef.current.click();
                }}
              >
                <i className="fa fa-plus-circle "></i>
                <div>Ajouter une image</div>
              </div>
            </div>
          )}
          <div className="row">
            <input
              type="file"
              className="image-input"
              name="mFile"
              hidden
              ref={imageRef}
              onChange={e =>
                carouselItemFormService.validateFileChange(
                  imageRef,
                  formValues
                )
              }
            />
            <input type="submit" value="Envoyer" />
          </div>
        </form>
      )}
      {isLoading && <Loading text="Traitement en cours..." />}
    </div>
  );
};
export default CarouselItemForm;
