import React from 'react';
import './Section.css';

const Section = ({section}) => {

  return (
  <div className="Section">
    <h2>{ section.title}</h2>
    <div className= { (section.leftUrlFile || section.rightUrlFile) ? "Section-body contains-image" : "Section-body"}>
      { section.leftUrlFile && <img className="left-image" src={section.leftUrlFile} alt={section.id + "image left"}/> }
      { section.rightUrlFile && <img className="right-image" src={section.rightUrlFile} alt={section.id + "image right"}/> }
      {  section.text && <div className="text-section" dangerouslySetInnerHTML={{__html: section.text.replace(/(?:\r\n|\r|\n)/g, "<br/>")}} /> }
      </div>
  </div>
);
}

export default Section;
