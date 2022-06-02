import React, { useState } from 'react';
import '../App.css';
import gun from '../image/gun.svg';
import aim from '../image/aim.svg';

import helmet from '../image/helmet.svg';
import shield from '../image/shield.svg';
import rad from '../image/rad.svg';
import energy from '../image/energy.svg';
import { PerkList } from './PerkList';
import yo from '../image/yo.svg'

import star1 from '../image/star1.svg'
import star2 from '../image/star2.svg'
import star0 from '../image/star0.svg'

import pipboyImg from '../image/vaultboy.gif'

const MePart = () => {

  const [op, setOp] = useState("mySelf");

  const [image, setImage] = useState(PerkList[0].img);
  const [title, setTitle] = useState(PerkList[0].key);
  const [desc, setDesc] = useState(PerkList[0].des);
  const [actual1, setActual1] = useState(PerkList[0].stars1.n1);
  const [actual2, setActual2] = useState(PerkList[0].stars1.n2);
  const [actual3, setActual3] = useState(PerkList[0].stars1.n3);
  const [actual4, setActual4] = useState(PerkList[0].stars1.n4);
  const [actual5, setActual5] = useState(PerkList[0].stars1.n5);

  const clickHandler = (e) => {
    PerkList.forEach(element => {
      console.log(element.key,"----",e.target.name)
      if(element.key == e.target.name){
        console.log(element.img)
        setTitle(element.key);
        setImage(element.img);
        setDesc(element.des);
        setActual1(element.stars1.n1);
        setActual2(element.stars1.n2);
        setActual3(element.stars1.n3);
        setActual4(element.stars1.n4);
        setActual5(element.stars1.n5);
      }
    });
  }

  const StarF1 = () => {
    console.log("F1",actual1)
    if(actual1 == 1){
      console.log("F1")
      return(
        <img src={star1}/>
      )
    } else if(actual1 == 2){
      console.log("F2")
      return(
        <img src={star2}/>
      )
    } else if(actual1 == 0){
      console.log("F0")
      return(
        <img src={star0}/>
      )
    }
  }
  const StarF2 = () => {
    console.log("F2",actual2)
    if(actual2 == 1){
      console.log("F1")
      return(
        <img src={star1}/>
      )
    } else if(actual2 == 2){
      console.log("F2")
      return(
        <img src={star2}/>
      )
    } else if(actual2 == 0){
      console.log("F0")
      return(
        <img src={star0}/>
      )
    }
  }
  const StarF3 = () => {
    console.log("F3",actual3)
    if(actual3 == 1){
      console.log("F1")
      return(
        <img src={star1}/>
      )
    } else if(actual3 == 2){
      console.log("F2")
      return(
        <img src={star2}/>
      )
    } else if(actual3 == 0){
      console.log("F0")
      return(
        <img src={star0}/>
      )
    }
  }
  const StarF4 = () => {
    console.log("F4",actual4)
    if(actual4 == 1){
      console.log("F1")
      return(
        <img src={star1}/>
      )
    } else if(actual4 == 2){
      console.log("F2")
      return(
        <img src={star2}/>
      )
    } else if(actual4 == 0){
      console.log("F0")
      return(
        <img src={star0}/>
      )
    }
  }
  const StarF5 = () => {
    console.log("F5",actual5)
    if(actual5 == 1){
      console.log("F1")
      return(
        <img src={star1}/>
      )
    } else if(actual5 == 2){
      console.log("F2")
      return(
        <img src={star2}/>
      )
    } else if(actual5 == 0){
      console.log("F0")
      return(
        <img src={star0}/>
      )
    }
  }

  const Perks = () => {
    return (
      <div className='contentPerks'>
        <div className='listPerks'>
          {
            PerkList.map((object) => (
              <div className='listPerksButton' key={object.key}>
                <button name={object.key} onClick={clickHandler}>{object.key}</button>
              </div>
            ))
          }
        </div>
        <div className='descContent'>
          <div className='title'>
            <p>{title}</p>
          </div>
          <div className='imageDesc'>
            <img src={image}/>
          </div>
          <div>
            {
              <div className='starsPerk'>
                <StarF1/>
                <StarF2/>
                <StarF3/>
                <StarF4/>
                <StarF5/>
              </div>
            }
          </div>
          <div className='description'>
            <div className="topLeftLine"></div>
            <p>{desc}</p>
            <div className="topRightLine"></div>
          </div>
        </div>
      </div>
    );
  }

  const AboutMe = () => {
    return (
      <div className='contentMe'>
        <div className='leftAboutMe'>
          <div className='titleMe'>
            <p>Jose Miguel Gonzalez</p>
            <p>Vault 21 - ID143</p>
          </div>
          <div className='imageDescMe'>
            <img src={yo}/>
          </div>
        </div>
        <div className='descriptionMe'>
          <div className="topLeftLine"></div>
            <p>Jose Miguel Gonzalez, equipo de reconocimiento de bugs en el refugio 21. 20 ciclos solares de vida, Guatemalteco. Estudiante de ingenieria en ciencias de la computacion y la tecnologia. Apasionado de los videojuegos, jugarlos y desarrollarlos. Siempre tratando de mejorar por que nadie nace sabiendo. Siempre buscando compartir con las personas a su alrededor si considera que son buenas personas.</p>
          <div className="topRightLine"></div>
        </div>
      </div>
    );
  }

  const MySelf = () => {
    return (
      <div className='pip'>
        <div className='healthPipBoy'>
          <div className='leftHealthBars'>
            <div className="bar1"></div>
            <div className="bar2"></div>
          </div>
          <div className="vaultboy">
            <div className="bar3"></div>
            <img src={pipboyImg}/>
            <div className="bar4"></div>
          </div>
          <div className='rightHealthBars'>
            <div className="bar5"></div>
            <div className="bar6"></div>
          </div>
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

  const clickHandlerOption = (e) => {
    if("Perks" == e.target.name){
      setOp("Perks")
    } else if("mySelf" == e.target.name){
      setOp("mySelf")
    } else if("aboutMe" == e.target.name){
      setOp("aboutMe")
    }
  }

  const Returnable = () => {
    if("Perks" == op){
      console.log("Perks")
      return( 
        <Perks/>
      )
      
    } else if("mySelf" == op){
      console.log("mySelf")
      return(
        <MySelf/>
      )
    } else if("aboutMe" == op){
      console.log("aboutMe")
      return(
        <AboutMe/>
      )
    }
  }

  return (
    <div className='MeOptions'>
      <div className="MeAsk">
        <button name="mySelf" onClick={clickHandlerOption}>Jose</button>
        <button name="Perks" onClick={clickHandlerOption}>Perks</button>
        <button name="aboutMe" onClick={clickHandlerOption}>About me</button>
      </div>
      <div className='regresador'>
        <Returnable/>
      </div>
    </div>  
  );
}

export default MePart;
