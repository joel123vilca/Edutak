import React from 'react';
import './modal.css';

function Modal(props){
  return(
    <div className="Modal">
    <p>Esto es un modal</p>
    { props.children}
    <button onClick={props.handleClick} className="Modal-close"/>
    </div>
  )
}

export default Modal;
