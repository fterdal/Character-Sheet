import React from 'react'
import { connect } from 'react-redux'
import { setStr, setDex, setCon, setInt, setWis, setCha } from '../redux'
import {
  abilityModifier,
  modifierString,
  abilityModifierString,
  abilityName,
} from './utils'

import './AbilityScore.scss'
const AbilityScore = ({ abilityScore, ability, editAbilityScore, save }) => {
  console.log(ability, 'save', save)
  const handleChange = ({ target: { value } }) => {
    editAbilityScore(value)
  }
  return (
    <div className="ability-score">
      <div className="ability-score-name">{abilityName(ability)}</div>
      <input
        name={ability}
        value={abilityScore}
        type="number"
        onChange={handleChange}
      />
      <div className="ability-mod">
        Mod: {abilityModifierString(abilityScore)}
      </div>
      <div className="ability-save">Save: {save}</div>
    </div>
  )
}

const mapState = ({ abilities, combatBasics: { prof } }, ownProps) => {
  const ability = ownProps.ability
  const abilityScore = abilities[ownProps.ability]
  const save = modifierString(
    abilityModifier(abilityScore) +
      (abilities.saves.includes(ability) ? prof : 0)
  )
  return {
    ability,
    abilityScore,
    save,
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {
    editAbilityScore: {
      str: str => dispatch(setStr(str)),
      dex: dex => dispatch(setDex(dex)),
      con: con => dispatch(setCon(con)),
      int: int => dispatch(setInt(int)),
      wis: wis => dispatch(setWis(wis)),
      cha: cha => dispatch(setCha(cha)),
    }[ownProps.ability],
  }
}

export default connect(
  mapState,
  mapDispatch
)(AbilityScore)
