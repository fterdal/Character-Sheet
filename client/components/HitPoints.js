import React from 'react'
import { connect } from 'react-redux'
import { setMaxHP, setCurrentHP } from '../redux'

import './HitPoints.scss'
const HitPoints = props => {
  const { currentHP, maxHP, editMaxHP, editCurrentHP } = props
  let hpMode = 'green'
  if (currentHP / maxHP <= 0.5) hpMode = 'orange'
  if (currentHP / maxHP <= 0.25) hpMode = 'red'
  return (
    <div className="hit-points">
      <div className="hit-points-title">Hit Points</div>
      <div className="hit-points-editor" style={{ borderColor: hpMode }}>
        <div className="current-hit-points">
          <label htmlFor="currentHP">Current</label>
          <input
            type="number"
            name="currentHP"
            value={currentHP}
            onChange={({ target: { value } }) => editCurrentHP(value)}
          />
        </div>
        <div className="max-hit-points">
          <input
            type="number"
            name="maxHP"
            value={maxHP}
            onChange={({ target: { value } }) => editMaxHP(value)}
          />
          <label htmlFor="maxHP">Maximum</label>
        </div>
      </div>
    </div>
  )
}

const mapState = ({ combatBasics: { maxHP, currentHP } }) => ({
  maxHP,
  currentHP,
})

const mapDispatch = dispatch => ({
  editMaxHP: maxHP => dispatch(setMaxHP(maxHP)),
  editCurrentHP: currentHP => dispatch(setCurrentHP(currentHP)),
})

export default connect(
  mapState,
  mapDispatch
)(HitPoints)
