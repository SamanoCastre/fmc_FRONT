
import React from 'react';

import './Alert.css';

const Alert = ({result}) => {
  return(
    <div className={"Alert alert-" + result.type.key}>
            <strong>{result.type.value} !</strong> {result.message}
      </div> 
  );
}

export default Alert;