import React, { useState } from 'react';
import '../App.css';
import gun from '../image/gun.svg';
import aim from '../image/aim.svg';

import helmet from '../image/helmet.svg';
import shield from '../image/shield.svg';
import rad from '../image/rad.svg';
import energy from '../image/energy.svg';

const MePart = () => {

  return (
    <div className='pip'>
      <div className="vaultboy">
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
        <div className="bar4"></div>
        <div className="bar5"></div>
        <div className="bar6"></div>
      </div>
      <div className='statsMe'>
        <div className='gun'>
          <img src={gun}/>
        </div>
        <div className='aim'>
          <img src={aim}/>
          <p>89</p>
        </div>

        <div className='helmet'>
          <img src={helmet}/>
        </div>
        <div className='shield'>
          <img src={shield}/>
          <p>89</p>
        </div>
        <div className='rad'>
          <img src={rad}/>
          <p>89</p>
        </div>
        <div className='energy'>
          <img src={energy}/>
          <p>89</p>
        </div>
      </div>
    </div>  
  );
}

export default MePart;
