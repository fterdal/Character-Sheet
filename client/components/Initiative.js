import React from 'react'
import { connect } from 'react-redux'
import { setArmor, setShield, setACMisc, setInitMisc } from '../redux'
import { abilityModifier } from './utils'

import './Initiative.scss'
const Initiative = props => {
  const {
    armor,
    shield,
    acMisc,
    prof,
    initMisc,
    dex,
    editACMisc,
    editInitMisc,
  } = props
  const totalAC = armor + shield + acMisc + abilityModifier(dex)
  const initProfBonus = prof * 2
  return (
    <div className="initiative">
      <div className="initiative-title">Initiative</div>
      <div className="initiative-total">{totalAC}</div>
      <div className="initiative-editor">
        <div>
          <label>Dex</label>
          <div>{abilityModifier(dex)}</div>
        </div>
        <div>
          <label>Proficiency</label>
          <div>{initProfBonus}</div>
        </div>
        <div>
          <label htmlFor="initMisc">Misc </label>
          <input
            type="number"
            name="initMisc"
            value={initMisc}
            onChange={({ target: { value } }) => editInitMisc(value)}
          />
        </div>
        <div>
          <select
            name="initProfBonus"
            className="initiative-proficiency"
          >
            <option value={0}>-</option>
            <option value={0.5}>Half proficiency</option>
            <option value={1}>Proficient</option>
            <option value={2}>Double proficiency</option>
          </select>
        </div>
      </div>
    </div>
  )
}

const mapState = ({
  combatBasics: { armor, shield, acMisc, prof, initMisc },
  abilities: { dex },
}) => ({
  armor,
  shield,
  acMisc,
  prof,
  initMisc,
  dex,
})

const mapDispatch = dispatch => ({
  editArmor: armor => dispatch(setArmor(armor)),
  editShield: shield => dispatch(setShield(shield)),
  editACMisc: acMisc => dispatch(setACMisc(acMisc)),
  editInitMisc: initMisc => dispatch(setInitMisc(initMisc)),
})

export default connect(
  mapState,
  mapDispatch
)(Initiative)
