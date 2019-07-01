import React, { useState } from 'react'
import { connect } from 'react-redux'
import { setInitMisc, setInitProf } from '../redux'
import { abilityModifier, abilityModifierString } from './utils'

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

  const [displayInitAbilities, setDisplayInitAbilities] = useState(false)

  const toggleInitAbilities = () => {
    setDisplayInitAbilities(!displayInitAbilities)
  }

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
          <label htmlFor="initAbilities">Additional Abilities</label>
          <span onClick={toggleInitAbilities}>{abilityModifier(str)}</span>
          <div
            name="initAbilities"
            id="initiative-abilities"
            style={{ display: displayInitAbilities ? 'grid' : 'none' }}
          >
            <label>Str</label>
            <input type="checkbox" value="str" />
            <div>{abilityModifierString(str)}</div>
            <label>Con</label>
            <input type="checkbox" value="con" />
            <div>{abilityModifierString(con)}</div>
            <label>Int</label>
            <input type="checkbox" value="int" />
            <div>{abilityModifierString(int)}</div>
            <label>Wis</label>
            <input type="checkbox" value="wis" />
            <div>{abilityModifierString(wis)}</div>
            <label>Cha</label>
            <input type="checkbox" value="cha" />
            <div>{abilityModifierString(cha)}</div>
            <button
              className="initiative-abilities-confirm"
              type="button"
              onClick={toggleInitAbilities}
            >
              ✔️
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapState = ({
  combatBasics: { prof, initMisc, initProf },
  abilities: { str, dex, con, int, wis, cha },
}) => ({
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
  editInitMisc: initMisc => dispatch(setInitMisc(initMisc)),
  editInitProf: initProf => dispatch(setInitProf(initProf)),
})

export default connect(
  mapState,
  mapDispatch
)(Initiative)
