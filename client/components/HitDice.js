import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setHitDice } from '../redux'

const hitDiceToString = hitDice =>
  Object.entries(hitDice)
    .map(([key, val]) => val + key)
    .join('+')

import './HitDice.scss'
const HitDice = props => {
  const { hitDice } = props
  console.log(hitDice)
  const [show, setShow] = useState(false)
  const handleSubmit = evt => {
    evt.preventDefault()
    console.log('submitting new hit dice')
  }
  const hitDiceStr = hitDiceToString(hitDice)
  return (
    <div className="hit-dice">
      Hit Dice: {hitDiceStr}
      <button type="button" onClick={() => setShow(!show)}>
        Edit
      </button>
      {show ? (
        <form onSubmit={handleSubmit}>
          <input className="num-dice-input" name="numDice" type="number" />
          <select>
            <option name="typeDice" value="d4">
              d4
            </option>
            <option name="typeDice" value="d6">
              d6
            </option>
            <option name="typeDice" value="d8">
              d8
            </option>
            <option name="typeDice" value="d10">
              d10
            </option>
            <option name="typeDice" value="d12">
              d12
            </option>
            <option name="typeDice" value="d20">
              d20
            </option>
          </select>
          <button type="submit">Submit</button>
        </form>
      ) : null}
    </div>
  )
}

const mapState = ({ combatBasics: { hitDice } }) => ({ hitDice })

const mapDispatch = dispatch => ({
  editHitDice: hitDice => dispatch(setHitDice(hitDice)),
})

export default connect(
  mapState,
  mapDispatch
)(HitDice)
