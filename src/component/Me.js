import React, { useState } from 'react';
import '../App.css';
import gun from '../image/gun.svg';
import aim from '../image/aim.svg';

import helmet from '../image/helmet.svg';
import shield from '../image/shield.svg';
import rad from '../image/rad.svg';
import energy from '../image/energy.svg';
import { skill_list } from './skillsList';
import { PerkList } from './PerkList';
import yo from '../image/yo.svg'

const MePart = () => {

  const [op, setOp] = useState("mySelf");

  const [image, setImage] = useState(skill_list[0].img);
  const [title, setTitle] = useState(skill_list[0].key);
  const [desc, setDesc] = useState(skill_list[0].des);

  const clickHandler = (e) => {
    skill_list.forEach(element => {
      console.log(element.key,"----",e.target.name)
      if(element.key == e.target.name){
        console.log(element.img)
        setTitle(element.key);
        setImage(element.img);
        setDesc(element.des);
      }
    });
  }

  const Perks = () => {
    return (
      <div className='contentPerks'>
        <div className='listPerks'>
          {
            skill_list.map((object) => (
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
