import React from 'react'
import { connect } from 'react-redux'
import { setProf } from '../redux'

import './Proficiency.scss'
const Proficiency = props => {
  const { prof, editProf } = props
  return (
    <div className="proficiency">
      <div className="proficiency-title">Proficiency</div>
      <div className="proficiency-total">
        <input
          name="prof"
          value={prof}
          type="number"
          onChange={({ target: { value } }) => editProf(value)}
        />
      </div>
    </div>
  )
}

const mapState = ({ combatBasics: { prof } }) => ({
  prof,
})

const mapDispatch = dispatch => ({
  editProf: prof => dispatch(setProf(prof)),
})

export default connect(
  mapState,
  mapDispatch
)(Proficiency)
