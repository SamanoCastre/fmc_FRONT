import React from 'react';

import { useNavigate, useParams } from 'react-router-dom';
import './PostForm.css';

const PostForm = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();

  return (
    <section className="PostForm">
     Activities Form - Work in progress
     </section>

);
}
export default PostForm;