import React from 'react'
import { connect } from 'react-redux'
import {
  setProf,
  setSpeed,
  setMaxHP,
  setCurrentHP,
  setArmorClass,
} from '../redux'
import { abilityModifier } from './utils'
import HitDice from './HitDice'

import './CombatBasics.scss'
const CombatBasics = props => {
  const {
    prof,
    speed,
    maxHP,
    currentHP,
    armorClass,
    editProf,
    editSpeed,
    editMaxHP,
    editCurrentHP,
    editArmorClass,
    dex,
  } = props
  const initiative = abilityModifier(dex)
  return (
    <div className="combat-basics">
      <HitDice />
      <div>
        <label htmlFor="currentHP">Initiative: </label>
        <span>{initiative}</span>
      </div>
      <div>
        <label htmlFor="currentHP">Current HP: </label>
        <input
          type="number"
          name="currentHP"
          value={currentHP}
          onChange={({ target: { value } }) => editCurrentHP(value)}
        />
      </div>
      <div>
        <label htmlFor="maxHP">Max HP: </label>
        <input
          type="number"
          name="maxHP"
          value={maxHP}
          onChange={({ target: { value } }) => editMaxHP(value)}
        />
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
      <div>
        <label htmlFor="armorClass">AC: </label>
        <input
          type="number"
          name="armorClass"
          value={armorClass}
          onChange={({ target: { value } }) => editArmorClass(value)}
        />
      </div>
    </div>
  )
}

const mapState = ({
  combatBasics: { prof, speed, maxHP, currentHP, armorClass },
  abilities: { dex },
}) => ({
  prof,
  speed,
  maxHP,
  currentHP,
  armorClass,
  dex,
})

const mapDispatch = dispatch => ({
  editProf: prof => dispatch(setProf(prof)),
  editSpeed: speed => dispatch(setSpeed(speed)),
  editMaxHP: maxHP => dispatch(setMaxHP(maxHP)),
  editCurrentHP: currentHP => dispatch(setCurrentHP(currentHP)),
  editArmorClass: armorClass => dispatch(setArmorClass(armorClass)),
})

export default connect(
  mapState,
  mapDispatch
)(CombatBasics)
