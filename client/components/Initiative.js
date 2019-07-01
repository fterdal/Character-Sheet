import React from 'react'
import { connect } from 'react-redux'
import {
  setArmor,
  setShield,
  setACMisc,
  setInitMisc,
  setInitProf,
} from '../redux'
import { abilityModifier } from './utils'

import './Initiative.scss'
const Initiative = props => {
  const {
    prof,
    initMisc,
    editInitMisc,
    initProf,
    editInitProf,
    str,
    dex,
    con,
    int,
    wis,
    cha,
  } = props

  const handleProfBonusChange = evt => {
    const newInitProf = Number(evt.target.value)
    editInitProf(newInitProf)
  }

  const initProfBonus = Math.floor(Number(initProf) * prof)

  const totalInit = abilityModifier(dex) + initMisc + initProfBonus

  return (
    <div className="initiative">
      <div className="initiative-title">Initiative</div>
      <div className="initiative-total">{totalInit}</div>
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
          <label htmlFor="initMisc">Misc</label>
          <input
            type="number"
            name="initMisc"
            value={initMisc}
            onChange={({ target: { value } }) => editInitMisc(value)}
          />
        </div>
        <div>
          <label htmlFor="initProfBonus">Prof</label>
          <select
            name="initProfBonus"
            className="initiative-proficiency"
            onChange={handleProfBonusChange}
            value={initProf}
          >
            <option value={0}>-</option>
            <option value={0.5}>0.5</option>
            <option value={1}>1.0</option>
            <option value={2}>2.0</option>
          </select>
        </div>
      </div>
    </div>
  )
}

const mapState = ({
  combatBasics: { armor, shield, acMisc, prof, initMisc, initProf },
  abilities: { str, dex, con, int, wis, cha },
}) => ({
  armor,
  shield,
  acMisc,
  prof,
  initMisc,
  initProf,
  str,
  dex,
  con,
  int,
  wis,
  cha,
})

const mapDispatch = dispatch => ({
  editArmor: armor => dispatch(setArmor(armor)),
  editShield: shield => dispatch(setShield(shield)),
  editACMisc: acMisc => dispatch(setACMisc(acMisc)),
  editInitMisc: initMisc => dispatch(setInitMisc(initMisc)),
  editInitProf: initProf => dispatch(setInitProf(initProf)),
})

export default connect(
  mapState,
  mapDispatch
)(Initiative)
