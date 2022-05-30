import React, { useState } from 'react';
import '../App.css';
import arrow from '../image/arrow.svg'

const ProjectPart = () => {

  return (
    <div className='projectContainer'>
      <div className='rigthArrow'>
        <img src={arrow}/>
      </div>
      <div className='projectContent'>
        <p>hola</p>
      </div>
      <div className='leftArrow'>
      <img src={arrow}/>
      </div>
    </div>
  );
}

export default ProjectPart;
