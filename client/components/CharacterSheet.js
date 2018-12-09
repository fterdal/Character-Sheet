import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setName, setRace, setCharacterClass } from '../redux'

const CharacterSheet = (props) => {
  const {
    name, race, characterClass,
    editName, editRace, editCharacterClass,
  } = props
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
