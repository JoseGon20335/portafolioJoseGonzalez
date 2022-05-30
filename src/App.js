import React, { useState } from 'react';
import './App.css';
import BotPart from './component/bot';
import TotPart from './component/top';
import BodyPart from './component/body';

const App = () => {

  const [option, setOption] = useState("Links")

  return (
    <div>
      <TotPart/>
      <BodyPart option = {option}/>
      <BotPart setOption = {setOption}/>
    </div>
  );

}

export default App;
