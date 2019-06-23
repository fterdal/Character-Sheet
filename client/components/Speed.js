import React from 'react'
import { connect } from 'react-redux'
import { setSpeed } from '../redux'

import './Speed.scss'
const Speed = props => {
  const { speed, editSpeed } = props
  return (
    <div className="speed">
      <div className="speed-title">Speed</div>
      <div className="speed-total">
        <input
          name="speed"
          value={speed}
          type="number"
          onChange={({ target: { value } }) => editSpeed(value)}
        />
      </div>
    </div>
  )
}

const mapState = ({ combatBasics: { speed } }) => ({
  speed,
})

const mapDispatch = dispatch => ({
  editSpeed: speed => dispatch(setSpeed(speed)),
})

export default connect(
  mapState,
  mapDispatch
)(Speed)
