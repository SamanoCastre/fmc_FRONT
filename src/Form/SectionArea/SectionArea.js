import React, {useRef, useEffect, useState} from "react";
import {ContentService} from "../../services/ContentService";
import "./SectionArea.css";

const SectionArea = ({section, onSectionChange, oneMoreSection, position}) => {
  const [width, setWidth] = useState(100);
  const titleRef = useRef();
  const textareaRef = useRef();
  const leftImageInput = useRef();
  const rightImgeInput = useRef();
  const orderRef = useRef();

  useEffect(() => {
    ContentService.initTextAreaSize(section, setWidth);
  }, [section]);

  return (
    <div className="SectionArea col-95">
      {section && (
        <>
          <div className="row">
            <input
              type="hidden"
              value={section.id}
              name={"sections[" + position + "].id"}
            />
            <input
              onChange={e =>
                ContentService.validateSectionTextField(
                  titleRef,
                  section,
                  onSectionChange
                )
              }
              type="text"
              name={"sections[" + position + "].title"}
              placeholder="Titre du section"
              value={section.title ? section.title : ""}
              ref={titleRef}
            />
          </div>
          <div className="row">
            {section.leftUrlFile && (
              <div className="left-image col-20">
                <img
                  src={section.leftUrlFile}
                  alt={section.id + "-image left"}
                />
              </div>
            )}
            {
              <textarea
                onChange={() =>
                  ContentService.validateSectionTextField(
                    textareaRef,
                    section,
                    onSectionChange
                  )
                }
                className={"textarea-section col-" + width}
                value={section.text}
                rows="6"
                name={"sections[" + position + "].text"}
                placeholder="Ecrire le texte du section ici..."
                ref={textareaRef}
              />
            }
            {section.rightUrlFile && (
              <div className="right-image col-20">
                <img
                  src={section.rightUrlFile}
                  alt={section.id + "image right"}
                />
              </div>
            )}
          </div>
          <div className="row order-wrapper">
            <div className="order-box" title="Changer l'ordre des sections">
              <div className="order-label">Ordre : </div>
              <input
                className="order-box-input"
                type="number"
                value={section.order}
                name={"sections[" + position + "].order"}
                ref={orderRef}
                min={0}
                onChange={() =>
                  ContentService.validateSectionTextField(
                    orderRef,
                    section,
                    onSectionChange
                  )
                }
              />
            </div>
          </div>
          <div className="row add-buttons">
            <div
              className="add-button-item"
              onClick={() => {
                leftImageInput.current.click();
              }}
            >
              <i className="fa fa-plus-circle " />
              <div>Ajouter/modifier image (gauche)</div>
            </div>
            <div
              className="add-button-item section-add-button-item"
              onClick={() => oneMoreSection(section.order)}
            >
              <i className="fa fa-plus-circle " />
              <div>Ajouter une nouvelle section</div>
            </div>
            <div
              className="add-button-item"
              onClick={() => {
                rightImgeInput.current.click();
              }}
            >
              <i className="fa fa-plus-circle " />
              <div>Ajouter/modifier image (droite)</div>
            </div>
          </div>
          <div>
            <input
              type="file"
              className="image-left-input"
              name={"sections[" + position + "].leftMFile"}
              hidden
              ref={leftImageInput}
              onChange={() =>
                ContentService.validateSectionFileChangeHandler(
                  leftImageInput,
                  section,
                  onSectionChange
                )
              }
              accept="image/x-png,image/gif,image/jpeg,image/jpg"
            />
            <input
              type="file"
              className="image-right-input"
              name={"sections[" + position + "].rightMFile"}
              hidden
              ref={rightImgeInput}
              onChange={() =>
                ContentService.validateSectionFileChangeHandler(
                  rightImgeInput,
                  section,
                  onSectionChange
                )
              }
              accept="image/x-png,image/gif,image/jpeg,image/jpg"
            />
          </div>
        </>
      )}
    </div>
  );
};

export default SectionArea;
