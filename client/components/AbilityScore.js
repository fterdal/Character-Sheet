import React from 'react'
import { connect } from 'react-redux'
import {
  setStr,
  setDex,
  setCon,
  setInt,
  setWis,
  setCha,
  addSave,
  removeSave,
} from '../redux'
import {
  abilityModifier,
  modifierString,
  abilityModifierString,
  abilityName,
} from './utils'

import './AbilityScore.scss'
const AbilityScore = ({
  abilityScore,
  ability,
  editAbilityScore,
  addSaveProf,
  removeSaveProf,
  prof,
  saveProf,
}) => {
  const save = modifierString(
    abilityModifier(abilityScore) + (saveProf ? prof : 0)
  )
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
      <div className="ability-save">
        <input
          name="saveProf"
          type="checkbox"
          onChange={saveProf ? removeSaveProf : addSaveProf}
          checked={saveProf}
        />
        Save: {save}
      </div>
    </div>
  )
}

const mapState = ({ abilities, combatBasics: { prof } }, { ability }) => ({
  ability,
  abilityScore: abilities[ability],
  prof,
  saveProf: abilities.saves.includes(ability),
})

const mapDispatch = (dispatch, ownProps) => {
  return {
    str: {
      editAbilityScore: str => dispatch(setStr(str)),
      addSaveProf: () => dispatch(addSave('str')),
      removeSaveProf: () => dispatch(removeSave('str')),
    },
    dex: {
      editAbilityScore: dex => dispatch(setDex(dex)),
      addSaveProf: () => dispatch(addSave('dex')),
      removeSaveProf: () => dispatch(removeSave('dex')),
    },
    con: {
      editAbilityScore: con => dispatch(setCon(con)),
      addSaveProf: () => dispatch(addSave('con')),
      removeSaveProf: () => dispatch(removeSave('con')),
    },
    int: {
      editAbilityScore: int => dispatch(setInt(int)),
      addSaveProf: () => dispatch(addSave('int')),
      removeSaveProf: () => dispatch(removeSave('int')),
    },
    wis: {
      editAbilityScore: wis => dispatch(setWis(wis)),
      addSaveProf: () => dispatch(addSave('wis')),
      removeSaveProf: () => dispatch(removeSave('wis')),
    },
    cha: {
      editAbilityScore: cha => dispatch(setCha(cha)),
      addSaveProf: () => dispatch(addSave('cha')),
      removeSaveProf: () => dispatch(removeSave('cha')),
    },
  }[ownProps.ability]
}

export default connect(
  mapState,
  mapDispatch
)(AbilityScore)
