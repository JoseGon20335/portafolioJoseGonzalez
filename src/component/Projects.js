import React, { useState } from 'react';
import '../App.css';
import arrow from '../image/arrow.svg';
import lg from '../image/roku.svg';
import { project_list } from './projectList';

const ProjectPart = () => {

  const [k, setK] = useState(0);
  const [title, setTitle] = useState(project_list[0].name);
  const [desc, setDesc] = useState(project_list[0].des);
  const [image, setImage] = useState(project_list[0].img);
  const [work, setWork] = useState(project_list[0].work);
  const [time, setTime] = useState(project_list[0].time);
  const [habi, setHabi] = useState(project_list[0].habilidades);

  const clickHandler = e => {

    let largo = project_list.length;

    console.log("largo", largo, "k", k)

    if(e.target.name == 'resta'){
      if( k < 0){
        console.log("1")
        setK(largo)
      } else{
        console.log("2")
        let val = k - 1;
        setK(val)
      }
    } else if(e.target.name == 'suma'){
      if( k > largo){
        console.log("3")
        setK(0)
      } else{
        console.log("4")
        let val = k + 1;
        setK(val)
      }
    }

    console.log("largo2", largo, "k2", k)

    setTitle(project_list[k].name);
    setImage(project_list[k].img);
    setDesc(project_list[k].des);
    setWork(project_list[k].work);
    setTime(project_list[k].time);
    setHabi(project_list[k].habilidades);

  }

  return (
    <div className='projectContainer'>
      <div className='leftArrow' name='resta' onClick={clickHandler}>
        <img name='resta' src={arrow}/>
      </div>
      <div className='projectContent'>
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
      </div>
      <div className='rigthArrow' name='suma' onClick={clickHandler}>
        <img name='suma' src={arrow}/>
      </div>
    </div>
  );
}

export default ProjectPart;
