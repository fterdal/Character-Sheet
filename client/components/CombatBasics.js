import React from 'react'
import { connect } from 'react-redux'
import {
  setProf,
  setSpeed,
  setMaxHP,
  setCurrentHP,
  setArmorClass,
} from '../redux'

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
  } = props
  return (
    <div className="combat-basics">
      <div>
        <label htmlFor="currentHP">Current HP: </label>
        <input
          name="currentHP"
          value={currentHP}
          onChange={({ target: { value } }) => editCurrentHP(value)}
        />
      </div>
      <div>
        <label htmlFor="maxHP">Max HP: </label>
        <input
          name="maxHP"
          value={maxHP}
          onChange={({ target: { value } }) => editMaxHP(value)}
        />
      </div>
      <div>
        <label htmlFor="prof">Proficiency: </label>
        <input
          name="prof"
          value={prof}
          onChange={({ target: { value } }) => editProf(value)}
        />
      </div>
      <div>
        <label htmlFor="prof">Speed: </label>
        <input
          name="speed"
          value={speed}
          onChange={({ target: { value } }) => editSpeed(value)}
        />
      </div>
      <div>
        <label htmlFor="armorClass">AC: </label>
        <input
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
}) => ({
  prof,
  speed,
  maxHP,
  currentHP,
  armorClass,
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
