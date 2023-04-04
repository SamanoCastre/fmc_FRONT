import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './MemberForm.css';

const MemberForm = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="MemberForm">
     Activities Form - Work in progress
     </section>

);
}
export default MemberForm;