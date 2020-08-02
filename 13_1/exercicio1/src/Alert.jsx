import React from 'react';
import PropTypes from 'prop-types';
import './Alert.css';

const Alert = (props) => {
  const { hideComponent, contentTitle, content } = props;
  setTimeout(() => hideComponent(), 3000); //chama a prop que muda o estado do app, fazendo o alert ser escondido depois de 3 segundos
  return (
    <div className='Alert'>
      <h1>{contentTitle}</h1>
      <p>{content}</p>
    </div>
  )
}

export default Alert;