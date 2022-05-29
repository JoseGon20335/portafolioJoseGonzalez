import React, { useState } from 'react';
import './App.css';
import BotPart from './component/bot';
import TotPart from './component/top';
import BodyPart from './component/body';

const App = () => {

  return (
    <div>
      <TotPart/>
      <BodyPart/>
      <BotPart/>
    </div>
  );

}

export default App;
