import React from 'react';
import MediaProfe from './mediaprofe.js';

function  Profesores(props) {
    const profesores = props.data.teachers
    console.log(props.data);
    return (
      <div className= "profesores">

      {
        profesores.map((item) => {
          return <MediaProfe {...item} key= {item.id}/>
        })
      }
      </div>
    )

}

export default Profesores;
