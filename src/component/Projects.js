import React, { useState } from 'react';
import '../App.css';
import arrow from '../image/arrow.svg'
import lg from '../image/roku.svg'

const ProjectPart = () => {

  return (
    <div className='projectContainer'>
      <div className='leftArrow'>
        <img src={arrow}/>
      </div>
      <div className='projectContent'>
        <div className='caja'>
          <div className='cajaLeft'>
            <p>AHA</p>
            <img src={lg}/>
          </div>
          <div className='cajaRight'>
            <p>Trabajo en AHA, plataforma de streaming, en la que trabaje como desarrollador de frontend para los dispositivos de roku, programando en brightscript</p>
            
            <div className='cajasPro'>
              <div className='bottomCube'>Time</div>
              <div className='bottomCube'>Work</div>
              <div className='bottomCube'>Habilities</div>
            </div>
            
          </div>
        </div>
      </div>
      <div className='rigthArrow'>
      <img src={arrow}/>
      </div>
    </div>
  );
}

export default ProjectPart;
