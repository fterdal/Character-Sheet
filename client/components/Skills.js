import React from 'react'
import AbilitySkills from './AbilitySkills'

import './Skills.scss'
const Skills = () => (
    <div className="skills-container">
      <AbilitySkills ability="str" />
      <AbilitySkills ability="dex" />
      <AbilitySkills ability="int" />
      <AbilitySkills ability="wis" />
      <AbilitySkills ability="cha" />
    </div>
  )

export default Skills
