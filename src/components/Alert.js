import React from 'react';
import './styles/Alert.css';

function Alert(props) {
  const capitalizeFirstChar = (word) => {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }
  return (
    // the following code acts like a condition, if props.alert != null, only then the html code is returned by Alert()
    props.alert && <div>
          <div className={`alert alert-${props.alert.type} alert-dismissible fade show fs-5`} role="alert">
            <div className='container'>
              {capitalizeFirstChar(props.alert.type)} : {props.alert.msg}
            </div>
            <div className="container">
            <button type="button" className="btn-close mx-3" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
    </div>
  )
}

export default Alert