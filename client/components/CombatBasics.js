import React from 'react'
import HitDice from './HitDice'
import HitPoints from './HitPoints'
import ArmorClass from './ArmorClass'
import Speed from './Speed'
import Proficiency from './Proficiency'
import Initiative from './Initiative'

import './CombatBasics.scss'
const CombatBasics = () => {
  return (
    <div className="combat-basics">
      <div className="row">
        <HitDice />
        <HitPoints />
        <ArmorClass />
      </div>
      <div className="row">
        <Initiative />
        <Speed />
        <Proficiency />
      </div>
    </div>
  )
}

export default CombatBasics
