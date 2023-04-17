import React from 'react';
import './Loading.css';

const Loading = ({text}) => (
  <div className="Loading">
    <div className="loading-icon"><i className="fa fa-refresh fa-spin"></i></div>
    <div className='loading-text'>{text}</div>
  </div>
);

export default Loading;
