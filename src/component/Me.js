import React, { useState } from 'react';
import '../App.css';
import gun from '../image/gun.svg';
import aim from '../image/aim.svg';

import helmet from '../image/helmet.svg';
import shield from '../image/shield.svg';
import rad from '../image/rad.svg';
import energy from '../image/energy.svg';
import { skill_list } from './skillsList';

const MePart = () => {

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
      console.log("Perks")
      return( 
        <Perks/>
      )
      
    } else if("mySelf" == e.target.name){
      console.log("mySelf")
      return(
        <MySelf/>
      )
    }
  }

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
