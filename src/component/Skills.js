import React, { useState } from 'react';
import '../App.css';
import { skill_list } from './skillsList';
import soundE from '../audio/buttonSound.mp3'

const SkillsPart = () => {

  const audio = new Audio(soundE);

  const [image, setImage] = useState(skill_list[0].img);
  const [title, setTitle] = useState(skill_list[0].key);
  const [desc, setDesc] = useState(skill_list[0].des);

  const clickHandler = (e) => {

    audio.play();

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

  return (
    <div className='contentSkills'>
      <div className='listSkills'>
        {
          skill_list.map((object) => (
            <div className='listSkillsButton' key={object.key}>
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

export default SkillsPart;
