import React from 'react'
import { connect } from 'react-redux'
import { setInitMisc, setInitProf, setInitAbility } from '../redux'
import { abilityModifier } from './utils'

import './Initiative.scss'
const Initiative = props => {
  const {
    prof,
    initMisc,
    editInitMisc,
    initProf,
    editInitProf,
    initAbility,
    editInitAbility,
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
        <div>
          <label>Second Ability</label>
          <div>
            <select
              name="initAbility"
              className="initiative-second-ability"
              onChange={({ target: { value } }) => editInitAbility(value)}
              value={initAbility}
            >
              <option value="">-</option>
              <option value="str">Str: {abilityModifier(str)}</option>
              <option value="con">Con: {abilityModifier(con)}</option>
              <option value="int">Int: {abilityModifier(int)}</option>
              <option value="wis">Wis: {abilityModifier(wis)}</option>
              <option value="cha">Cha: {abilityModifier(cha)}</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapState = ({
  combatBasics: { prof, initMisc, initProf, initAbility },
  abilities: { str, dex, con, int, wis, cha },
}) => ({
  prof,
  initMisc,
  initProf,
  initAbility,
  str,
  dex,
  con,
  int,
  wis,
  cha,
})

const mapDispatch = dispatch => ({
  editInitMisc: initMisc => dispatch(setInitMisc(initMisc)),
  editInitProf: initProf => dispatch(setInitProf(initProf)),
  editInitAbility: initAbility => dispatch(setInitAbility(initAbility)),
})

export default connect(
  mapState,
  mapDispatch
)(Initiative)
