import React from 'react'
import { connect } from 'react-redux'
import {
  setProf,
  setSpeed,
  setMaxHP,
  setCurrentHP,
} from '../redux'
import { abilityModifier } from './utils'
import HitDice from './HitDice'
import HitPoints from './HitPoints'

import './CombatBasics.scss'
import ArmorClass from './ArmorClass';
const CombatBasics = props => {
  const {
    prof,
    speed,
    editProf,
    editSpeed,
    dex,
  } = props
  const initiative = abilityModifier(dex)
  return (
    <div className="combat-basics">
      <div className="first-row">
        <HitDice />
        <HitPoints />
        <ArmorClass />
      </div>
      <br />
      <div>
        <label>Initiative: </label>
        <span>{initiative}</span>
      </div>
      <div>
        <label htmlFor="prof">Proficiency: </label>
        <input
          type="number"
          name="prof"
          value={prof}
          onChange={({ target: { value } }) => editProf(value)}
        />
      </div>
      <div>
        <label htmlFor="prof">Speed: </label>
        <input
          type="number"
          name="speed"
          value={speed}
          onChange={({ target: { value } }) => editSpeed(value)}
        />
      </div>
    </div>
  )
}

const mapState = ({
  combatBasics: { prof, speed, maxHP, currentHP },
  abilities: { dex },
}) => ({
  prof,
  speed,
  maxHP,
  currentHP,
  dex,
})

const mapDispatch = dispatch => ({
  editProf: prof => dispatch(setProf(prof)),
  editSpeed: speed => dispatch(setSpeed(speed)),
  editMaxHP: maxHP => dispatch(setMaxHP(maxHP)),
  editCurrentHP: currentHP => dispatch(setCurrentHP(currentHP)),
})

export default connect(
  mapState,
  mapDispatch
)(CombatBasics)
