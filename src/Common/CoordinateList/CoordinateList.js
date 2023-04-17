import React from 'react';
import './CoordinateList.css';
import { useSelector } from 'react-redux';
import Coordinate from '../Coordinate/Coordinate';
import { EFMCValuesTypes } from '../../Utils/Enums';

const CoordinateList = () => {
    const fmcValues = useSelector(state => state.fmc_value_state.fmcValues);
    
    const privateContacts = () =>{
        return fmcValues.filter(c=> [EFMCValuesTypes.Email, EFMCValuesTypes.Phone].includes(c.type.toUpperCase()) && c.active);
    }

    //(c.type === 'e-mail' || c.type === 'phone')

    const socialMedias = () => {
        //(c.type !== 'e-mail' && c.type !== 'phone' && c.type !== 'label'
        return fmcValues.filter(c=> ![EFMCValuesTypes.Email, EFMCValuesTypes.Phone, EFMCValuesTypes.Label, EFMCValuesTypes.Site].includes(c.type.toUpperCase()) && c.active);
    }
    
    return (
        <>
        {fmcValues && fmcValues.length > 0 && <div className="CoordinateList">
            <ul className="private-contacts">
              { privateContacts().map((contact,index)=> <li key={index}><Coordinate coordinate={contact}/></li>)}
            </ul>
            <ul className='social-medias'>
              { socialMedias().map((media,index)=> <li key={index}><Coordinate coordinate={media}/></li>)}
            </ul>
        </div>}
        </>
    );

}
export default CoordinateList;