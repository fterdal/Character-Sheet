import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setName, setRace, setCharClass } from '../redux'

import './Basics.css'
const Basics = props => {
  const {
    name,
    race,
    charClass,
    editName,
    editRace,
    editCharacterClass,
  } = props
  return (
    <div className="basics">
      <div>
        <label htmlFor="name">Name: </label>
        <input
          name="name"
          value={name}
          onChange={({ target: { value } }) => editName(value)}
        />
      </div>
      <div>
        <label htmlFor="race">Race: </label>
        <input
          name="race"
          value={race}
          onChange={({ target: { value } }) => editRace(value)}
        />
      </div>
      <div>
        <label htmlFor="characterClass">Class: </label>
        <input
          name="characterClass"
          value={charClass}
          onChange={({ target: { value } }) => editCharacterClass(value)}
        />
      </div>
    </div>
  )
}

const mapState = ({ basics: { name, race, charClass } }) => ({
  name,
  race,
  charClass,
})

const mapDispatch = dispatch => ({
  editName: name => dispatch(setName(name)),
  editRace: race => dispatch(setRace(race)),
  editCharacterClass: characterClass => dispatch(setCharClass(characterClass)),
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(Basics)
)
