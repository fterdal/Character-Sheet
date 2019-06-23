import React from 'react'
import { connect } from 'react-redux'
import { setProf } from '../redux'
import { abilityModifier } from './utils'
import HitDice from './HitDice'
import HitPoints from './HitPoints'
import Speed from './Speed'
import './CombatBasics.scss'
import ArmorClass from './ArmorClass'

const CombatBasics = props => {
  const { prof, editProf, dex } = props
  const initiative = abilityModifier(dex)
  return (
    <div className="combat-basics">
      <div className="row">
        <HitDice />
        <HitPoints />
        <ArmorClass />
      </div>
      <div className="row">
        <Speed />
      </div>
      <div>
        <label>Initiative: </label>
        <span>{initiative}</span>
      </div>
      <div>
        <label htmlFor="prof">Proficiency: </label>
        <input
          type="number"
          name="prof"
          value={prof}
          onChange={({ target: { value } }) => editProf(value)}
        />
      </div>
    </div>
  )
}

const mapState = ({ combatBasics: { prof }, abilities: { dex } }) => ({
  prof,
  dex,
})

const mapDispatch = dispatch => ({
  editProf: prof => dispatch(setProf(prof)),
})

export default connect(
  mapState,
  mapDispatch
)(CombatBasics)
