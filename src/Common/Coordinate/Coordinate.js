import React from 'react';
import './Coordinate.css';
import { FmcValuesService } from '../../services/FmcValuesService';

const Coordinate = ({coordinate}) => {
  
  const isPrivateContact = () =>{
    return coordinate.type === 'e-mail' || coordinate.type === 'phone';
  }
   

  return (
  <div className="Coordinate">
    {
      coordinate && isPrivateContact() &&
       <><i className={FmcValuesService.getIcon(coordinate.type)}></i> {coordinate.text} </>
    }
    {
      coordinate && !isPrivateContact() &&
      <a target="_blank" rel="noreferrer" href={coordinate.text}><i className={FmcValuesService.getIcon(coordinate.type)} ></i></a>
    }
  </div>
);
    }

export default Coordinate;
