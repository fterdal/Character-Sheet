import React from 'react'
import { setName, setRace, setCharacterClass } from '../redux'
import { connect } from 'react-redux'

const CharacterSheet = (props) => {
  const {
    name, race, characterClass,
    editName, editRace, editCharacterClass,
  } = props
  const editField = (e) => {

  }
  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input name="name" value={name} onChange={({ target: { value } }) => editName(value)} />
      <h2>Race: {props.race}</h2>
      <h2>Class: {props.characterClass}</h2>
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

export default connect(mapState, mapDispatch)(CharacterSheet)
