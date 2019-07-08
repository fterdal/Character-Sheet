import React from 'react'
import AbilitySkills from './AbilitySkills'

import './Skills.scss'
const Skills = () => (
  <React.Fragment>
    <h2 className="skills-title">Skills</h2>
    <div className="skills-container">
      <AbilitySkills ability="str" />
      <AbilitySkills ability="dex" />
      <AbilitySkills ability="int" />
      <AbilitySkills ability="wis" />
      <AbilitySkills ability="cha" />
    </div>
  </React.Fragment>
)

export default Skills
