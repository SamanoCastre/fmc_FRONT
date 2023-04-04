import React, {useState, useEffect} from 'react';
import './Organization.css';
import OrganizationService from '../../../services/OrganizationService';
const Organization = () => {
   const [organization, setOrganisation] = useState(null);

  useEffect(() => {
      const orgService = new OrganizationService();
      setOrganisation(orgService.read());

  }, []);

  return (
    <section className="Organization" id="organization">
         <div className="space"></div>
        <div className="Organization-header title">Notre Organisation</div>
        <div className="header-line"></div>
        <div className="Organization-body" dangerouslySetInnerHTML={{__html: organization}} />
    </section>
  );
}
export default Organization;
