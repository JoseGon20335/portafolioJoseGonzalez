import React, { useState } from 'react';
import '../App.css';

const BotPart = () => {

  const handleClick = (e) => {
    if(e.target.name == 'Skills'){
      console.log("Skills")
    } else if(e.target.name == 'Projects'){
      console.log("Projects")
    } else if(e.target.name == 'Me'){
      console.log("Me")
    } else if(e.target.name == 'Links'){
      console.log("Links")
    }
  }

  return (
    <div className='bot'>
      <div className="botLeftLine"></div>
      <div className='buttonContainer'>
        <button name='Skills' onClick={handleClick}>Skills</button>
        <button name='Projects' onClick={handleClick}>Projects</button>
        <button name='Me' onClick={handleClick}>Me</button>
        <button name='Links' onClick={handleClick}>Links</button>
      </div>
      <div className="botRightLine"></div>
    </div>
  );
}

export default BotPart;
