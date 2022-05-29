import React, { useState } from 'react';
import '../App.css';
import SkillsPart from './Skills';
import ProjectPart from './Projects';
import MePart from './Me';
import LinksPart from './Links';

const BodyPart = ({ option }) => {

  const OptionShow = () => {

    console.log("entro");
    if(option == 'Skills'){
      console.log("Skills")
      return(
        <SkillsPart/>
      )
    } else if(option == 'Projects'){
      console.log("Projects")
      return(
        <ProjectPart/>
      )
    } else if(option == 'Me'){
      console.log("Me")
      return(
        <MePart/>
      )
    } else if(option == 'Links'){
      console.log("Links")
      return(
        <LinksPart/>
      )
    }
  }

  return (
    <div>
      <OptionShow/>
    </div>
  );
}

export default BodyPart;
