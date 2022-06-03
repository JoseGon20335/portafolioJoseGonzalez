import React, { useState } from 'react';
import '../App.css';
import arrow from '../image/arrow.svg';
import { project_list } from './projectList';
import soundE from '../audio/buttonSound.mp3'

const ProjectPart = () => {

  const audio = new Audio(soundE);

  const [k, setK] = useState(0);
  const [title, setTitle] = useState(project_list[k].name);
  const [desc, setDesc] = useState(project_list[k].des);
  const [image, setImage] = useState(project_list[k].img);
  const [work, setWork] = useState(project_list[k].work);
  const [time, setTime] = useState(project_list[k].time);
  const [habi, setHabi] = useState(project_list[k].habilidades);

  const clickHandler = e => {
    audio.play();
    let largo = project_list.length;
    
    let val = k;

    if(e.target.name == 'resta'){
      val = k - 1;
    } else if(e.target.name == 'suma'){
      val = k + 1;
    }

    if(val >= 0){
      if(val > 6){
        val = 0
        setK(0)
      } else{
        setK(val)
      }
    } else{
      val = largo-1
      setK(largo-1)
    }

    seteador(val);

  }

  const seteador = (val) => {
    setTitle(project_list[val].name);
    setImage(project_list[val].img);
    setDesc(project_list[val].des);
    setWork(project_list[val].work);
    setTime(project_list[val].time);
    setHabi(project_list[val].habilidades);
  }

  return (
    <div className='projectContainer'>
      <div className='leftArrow' name='resta' onClick={clickHandler}>
        <img name='resta' src={arrow}/>
      </div>
      <div className='caja'>
        <div className='cajaLeft'>
          <p>{title}</p>
          <img src={image}/>
        </div>
        <div className='cajaRight'>
          <p>{desc}</p>
          
          <div className='cajasPro'>
            <div className='bottomCube'>{time}</div>
            <div className='bottomCube'>{work}</div>
            <div className='bottomCube'>{habi}</div>
          </div>
          
        </div>
      </div>
      <div className='rigthArrow' name='suma' onClick={clickHandler}>
        <img name='suma' src={arrow}/>
      </div>
    </div>
  );
}

export default ProjectPart;
