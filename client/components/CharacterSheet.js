import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {
  store,
  setName,
  setRace,
  setCharacterClass,
  setEntireState,
} from '../redux'

const CharacterSheet = (props) => {
  const {
    name, race, characterClass,
    editName, editRace, editCharacterClass,
  } = props
  setTimeout(() => store.dispatch(setEntireState({
    name: 'Tom',
    race: 'Dwarf',
    characterClass: 'Cleric',
  })), 1000)
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input
        name="name"
        value={name}
        onChange={({ target: { value } }) => editName(value)} />
      <br />
      <label htmlFor="race">Race: </label>
      <input
        name="race"
        value={race}
        onChange={({ target: { value } }) => editRace(value)} />
      <br />
      <label htmlFor="characterClass">Class: </label>
      <input
        name="characterClass"
        value={characterClass}
        onChange={({ target: { value } }) => editCharacterClass(value)} />
    </div>
  )
}

const mapState = ({ name, race, characterClass }) => ({
  name,
  race,
  characterClass,
})

const mapDispatch = (dispatch) => ({
  editName: (name) => dispatch(setName(name)),
  editRace: (race) => dispatch(setRace(race)),
  editCharacterClass: (characterClass) =>
    dispatch(setCharacterClass(characterClass)),
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(CharacterSheet)
)
