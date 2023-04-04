import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import './PostPage.css';

const PostPage = (props) => {
  const navigate = useNavigate();
  const {id} = useParams();
  return (
    <section className="PostPage">
      Posts Page - Work in progress
    </section>
);
  }
export default PostPage;