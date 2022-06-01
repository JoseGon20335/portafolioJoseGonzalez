import React, { useState } from 'react';
import '../App.css';
import git from '../image/git.svg';
import cv from '../image/cv.svg';

const LinksPart = () => {

  const CVLink = () => {}

  const GitLink = () => {}

  return (
    <div className='links'>
      <div className='git'>
        <img src={git}/>
        <p onClick={GitLink}>GITHUB</p>
      </div>
      <div className='git'>
        <img src={cv}/>
        <p onClick={CVLink}>DOWNLOAD CV</p>
      </div>
    </div>
  );
}

export default LinksPart;
