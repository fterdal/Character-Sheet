import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setHitDice } from '../redux'

const hitDiceToString = hitDice =>
  Object.entries(hitDice)
    .map(([key, val]) => val + key)
    .join('+')

const HitDice = props => {
  const { hitDice } = props
  console.log(hitDice)
  const [show, setShow] = useState(false)
  const hitDiceStr = hitDiceToString(hitDice)
  return (
    <div className="hit-dice">
      Hit Dice: {hitDiceStr}
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
