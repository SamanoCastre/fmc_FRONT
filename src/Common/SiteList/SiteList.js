import React from 'react';
import './SiteList.css';
import { useSelector } from 'react-redux';
import { FmcValuesService } from '../../services/FmcValuesService';

const SiteList = () => {
    const fmcValues = useSelector(state => state.fmc_value_state.fmcValues);
    
    const getSites = () =>{
        return fmcValues.filter(c=> c.type === 'site' && c.active);
    }
    
    return (
        <section id="site-list">
            {fmcValues && fmcValues.length > 0 && <>
            <div className="content-header title">{FmcValuesService.getByKey(fmcValues, "site-key-list")}</div>
            <div className="header-line"></div>
            <div className="siteList-body">
                <ul>
                    { getSites().map((site,index)=> <li key={index}><i className="fa fa-globe"></i> {site.text}</li>)}
                    </ul>
            </div>
            </>
            }
        </section>
    );

}
export default SiteList;