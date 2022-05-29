import React, { useState } from 'react';
import '../App.css';
import { skill_list } from './skillsList';

const SkillsPart = () => {

  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const clickHandler = (e) => {

    skill_list.forEach(element => {
      console.log(element.key,"----",e.target.name)
      if(element.key == e.target.name){
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
          <h3>{title}</h3>
        </div>
        <div className='imageDesc'>
          <p>{image}</p>
        </div>
        <div className='description'>
          <p>{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default SkillsPart;
