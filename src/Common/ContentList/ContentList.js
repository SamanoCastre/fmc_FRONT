import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import ContentCard from "../ContentCard/ContentCard";
import Modal from "../Modal/Modal";
import ContentForm from "../../Form/ContentForm/ContentForm";
import { ERightTypes } from "../../Utils/Enums";
import {ContentService} from "../../services/ContentService";
import {FmcValuesService} from "../../services/FmcValuesService";
import "./ContentList.css";

const contentListService = ContentService.newInstance();
const ContentList = ({type = null}) => {
  const {id} = useParams();
  const onlineUser = useSelector(state => state.common_state.onlineUser);
  const contents = useSelector(state => state.content_state.contents);
  const fmcValues = useSelector(state => state.fmc_value_state.fmcValues);
  const [data, setData] = useState([]);
  const [contentsType, setContentsType] = useState(null);
  const page = useSelector(state => state.common_state.page);
  const [isModalActive, setModalActive] = useState(false);
  
  useEffect(() => {
    contentListService.data = {
       setData : setData,
       setContentsType : setContentsType,
       contents : contents,
       fmcValues : fmcValues
    }
    contentListService.initList(type, id);
  }, [contents, type, id, fmcValues, contentsType]);

  const onCloseModal = () => {
    setModalActive(false);
  };

  return (
    <>
      {contentsType && fmcValues && (
        <section
          className="ContentList"
          id={contentsType.toLowerCase() + "-list"}
        >
          {page !== "dashboard" && <div className="space"></div>}
          {page === "dashboard" && (
            <div className="action-button-group">
              {  onlineUser && 
              onlineUser.right === ERightTypes.ADMINISTRATOR.key &&
              <div
                className="action-button add-button"
                onClick={() => setModalActive(true)}
              >
                {" "}
                <i className="fa fa-plus"></i> Ajouter un nouveau{" "}
              </div>
            }
              {isModalActive && (
                <Modal onClose={onCloseModal}>
                  <ContentForm />
                </Modal>
              )}
            </div>
          )}
          <div className="content-header title">{FmcValuesService.getByKey(fmcValues, contentsType + "-list-key")}</div>
          <div className="header-line"></div>
          <div className="contentList-body">
            {data &&
              data.map((aData, index) => (
                <ContentCard content={aData} key={index} />
              ))}
          </div>
        </section>
      )}
    </>
  );
};

export default ContentList;
