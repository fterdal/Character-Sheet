import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import {
  store,
  setName,
  setRace,
  setCharacterClass,
  setEntireState,
} from '../redux'

class CharacterSheet extends React.Component {
  componentDidMount() {
    const addressBar = this.props.history.location.pathname.slice(1)
    console.log('addressBar', JSON.parse(addressBar))
    const newState = JSON.parse(addressBar)
    this.props.editEntireState(newState)
    // this.setEntire({ addressBar: this.props.history.location.pathname.slice(1) })
  }
  setDummyData = () => {
    this.props.editEntireState({
      name: 'Tom',
      race: 'Dwarf',
      characterClass: 'Cleric',
    })
  }
  copyLink = () => {
    const stringifiedState = JSON.stringify(store.getState())
    copy(`http://localhost:8080/${stringifiedState}`)
  }
  render() {
    const {
      name, race, characterClass,
      editName, editRace, editCharacterClass,
    } = this.props
    return (
      <div>
        <button
          className="address-button"
          onClick={this.setDummyData}
          type="button">
            SET DUMMY DATA
        </button>
        <button
          className="address-button"
          onClick={this.copyLink}
          type="button">
            COPY LINK
        </button>
        <br />
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
  editEntireState: (entireState) =>
    dispatch(setEntireState(entireState)),
})

export default withRouter(
  connect(
    mapState,
    mapDispatch
  )(CharacterSheet)
)
