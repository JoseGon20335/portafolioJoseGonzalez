import React, { useState } from 'react';
import './App.css';
import BotPart from './component/bot.js';
import TotPart from './component/top.js';
import BodyPart from './component/body.js';

const App = () => {

  const [option, setOption] = useState("Me")

  return (
    <div>
      <TotPart/>
      <BodyPart option = {option}/>
      <BotPart setOption = {setOption}/>
    </div>
  );

}

export default App;
