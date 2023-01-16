import React from 'react';
import '../App.css';
import git from '../image/git.svg';
import cv from '../image/cv.svg';
import { saveAs } from "file-saver";
// import cvJose from "../CV.pdf";
// https://drive.google.com/file/d/1ABHuwQw_aA7CsIUeeVjf5O3uVuXIefBW/view?usp=sharing

const LinksPart = () => {

  const CVLink = () => {
    console.log("entro")
    saveAs(
      "https://drive.google.com/file/d/1sTIs9PomPOoQRKz2o46F5w9mi6htE1SP/view?usp=sharing",
      "JoseGonzalezCV.pdf"
    );
  }

  const GitLink = () => {
    console.log("entro2")
    window.location.href='https://github.com/JoseGon20335';
  }

  return (
    <div className='links'>
      <div className='git  onClick={CVLink}'>
        <img src={git}  onClick={GitLink}/>
        <p onClick={GitLink}>GITHUB</p>
      </div>
      <div className='git' onClick={CVLink}>
        <img src={cv}  onClick={CVLink}/>
        <p>DOWNLOAD CV</p>
      </div>
    </div>
  );
}

export default LinksPart;
