import React, { useState, useEffect }from 'react';
import './PostList.css';
import PostService from '../../../services/PostService';

const PostList = () => {
  const [Post, setPost] = useState([]);
  

  useEffect(() => {
    const service = new PostService();
    setPost(service.list());

  },[]);

  return(
  <section className="PostList" id="Post">
        <div className="space"></div>
        <div className="Post-header title">Actualités de la clinique</div>
        <div className="header-line"></div>
        <div className="PostList-body">
             { Post.map((aPost,index) => <Post PostObj={aPost} key={index}/> ) }
        </div>
    </section>
);
  }

export default PostList;
