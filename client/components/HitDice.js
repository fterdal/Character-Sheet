import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setHitDice } from '../redux'

const hitDiceToString = hitDice =>
  Object.entries(hitDice)
    .map(([key, val]) => val + key)
    .join('+')

import './HitDice.scss'
const HitDice = props => {
  const { hitDice, editHitDice } = props
  const hitDiceStr = hitDiceToString(hitDice)
  const [show, setShow] = useState(false)
  const [numDice, setNumDice] = useState('')
  const [typeDice, setTypeDice] = useState('d6')
  const handleSubmit = evt => {
    evt.preventDefault()
    editHitDice({
      ...hitDice,
      [typeDice]: numDice,
    })
  }
  const handleChange = ({ target: { name, value } }) => {
    if (name === 'typeDice') return setTypeDice(value)
    if (name === 'numDice' && value >= 0) {
      return setNumDice(Number(value))
    }
  }
  return (
    <div className="hit-dice">
      <span>Hit Dice: {hitDiceStr}</span>
      <button type="button" onClick={() => setShow(!show)}>
        Edit
      </button>
      {show ? (
        <form onSubmit={handleSubmit}>
          <input
            name="numDice"
            required
            className="num-dice-input"
            type="number"
            onChange={handleChange}
            value={numDice}
          />
          <select defaultValue="d6" name="typeDice" onChange={handleChange}>
            <option value="d4">d4</option>
            <option value="d6">d6</option>
            <option value="d8">d8</option>
            <option value="d10">d10</option>
            <option value="d12">d12</option>
            <option value="d20">d20</option>
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
