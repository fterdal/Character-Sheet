import React from 'react'
import AbilityScore from './AbilityScore'

import './Abilities.scss'
const Abilities = () => (
  <div className="abilities-container">
    <div className="abilities">
      <AbilityScore ability="str" />
      <AbilityScore ability="int" />
      <AbilityScore ability="dex" />
      <AbilityScore ability="wis" />
      <AbilityScore ability="con" />
      <AbilityScore ability="cha" />
    </div>
  </div>
)

export default Abilities
