import React, { useState, useEffect } from 'react';
import './App.css';
import BotPart from './component/bot.js';
import TotPart from './component/top.js';
import BodyPart from './component/body.js';

import videoIntro from './video/introScreen.mp4'

const App = () => {

  const [option, setOption] = useState("Me")

  const[loading, setLoading] = useState(false)
    useEffect(()=>{
      setLoading(true)
      setTimeout(()=>{
        setLoading(false)
      },20000)
  },[])

  return (
    <div className='waveScreen'>
      {
        loading?
        <div id="theVideo">
          <video loop autoPlay muted width="640" height="480">
              <source src = {videoIntro} type='video/mp4'/>
          </video>
        </div>
        :
        <div >
          <TotPart/>
          <BodyPart option = {option}/>
          <BotPart setOption = {setOption}/>
        </div>
      }
    </div>
  );
}
export default App;
