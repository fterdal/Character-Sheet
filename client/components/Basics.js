import React, { Fragment } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setName, setRace, setCharClass } from '../redux'

import './Basics.scss'
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
    <Fragment>
      <div className="basics-name">
        <input
          name="name"
          value={name}
          placeholder="Name"
          onChange={({ target: { value } }) => editName(value)}
        />
      </div>
      <div className="basics">
        <div>
          {/* <label htmlFor="race">Race: </label> */}
          <input
            name="race"
            value={race}
            placeholder="Race"
            onChange={({ target: { value } }) => editRace(value)}
          />
        </div>
        <div>
          {/* <label htmlFor="characterClass">Class (level): </label> */}
          <input
            name="characterClass"
            value={charClass}
            placeholder="Class (Level)"
            onChange={({ target: { value } }) => editCharacterClass(value)}
          />
        </div>
      </div>
    </Fragment>
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
