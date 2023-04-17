import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {ContentService} from "../../services/ContentService";
import Modal from "../Modal/Modal";
import ContentForm from "../../Form/ContentForm/ContentForm";
import Dialog from "../Dialog/Dialog";
import Section from "../Section/Section";
import "./Content.css";

const Content = ({type = null}) => {
  const contents = useSelector(state => state.content_state.contents);
  const contentService = ContentService.newInstance();
  const [content, setContent] = useState(null);
  const page = useSelector(state => state.common_state.page);
  const [isModalActive, setModalActive] = useState(false);
  const {id} = useParams();
  const [dialog, setDialog] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    contentService.data = {
      dispatch: dispatch,
      setDialog: setDialog,
      setContent: setContent,
      type: type,
    };
    contentService.initContent(contents, id);
  }, [contentService, contents, dispatch, id, type]);

  const onCloseModal = () => {
    setModalActive(false);
  };

  return (
    <>
      {content && (type || id) && (
        <section className="Content" id={content.type.toLowerCase()}>
          <div className="content-header title">{content.title}</div>
          <div className="header-line"></div>
          <div className="content-body">
            {ContentService.getOrderedSections(content).map(
              (section, index) => (
                <Section section={section} key={index} />
              )
            )}
            {content.sections && content.sections.length === 0 && (
              <div className="no-section">Aucune section n'a été trouvée.</div>
            )}
            {page === "dashboard" && (
              <div className="action-button-group">
                <div
                  className="action-button edit-button"
                  onClick={() => setModalActive(true)}
                >
                  {" "}
                  <i className="fa fa-edit"></i> modifier
                </div>

                {isModalActive && (
                  <Modal onClose={onCloseModal} size="medium">
                    <ContentForm contentIn={content} />
                  </Modal>
                )}
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
              </div>
            )}
          </div>
        </section>
      )}{" "}
    </>
  );
};

export default Content;
