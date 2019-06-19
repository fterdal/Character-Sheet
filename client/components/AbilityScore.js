import React from 'react'
import { connect } from 'react-redux'
import { setAbility, addSave, removeSave } from '../redux'
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
  const handleChange = ({ target: { value } }) => {
    editAbilityScore(value)
  }
  return (
    <div className="ability-score">
      <div className="ability-score-name">{abilityName(ability)}</div>
      <table>
        <thead>
          <tr>
            <th>Score</th>
            <th>Mod</th>
            <th>Save</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <input
                className="ability-score-input"
                name={ability}
                value={abilityScore}
                type="number"
                onChange={handleChange}
              />
            </td>
            <td>{abilityModifierString(abilityScore)}</td>
            <td>{save}</td>
            <td>
              <input
                name="saveProf"
                type="checkbox"
                onChange={saveProf ? removeSaveProf : addSaveProf}
                checked={saveProf}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const mapState = ({ abilities, combatBasics: { prof } }, { ability }) => ({
  ability,
  abilityScore: abilities[ability],
  prof,
  saveProf: abilities.saves.includes(ability),
})

const mapDispatch = (dispatch, { ability }) => ({
  editAbilityScore: score => dispatch(setAbility(ability, score)),
  addSaveProf: () => dispatch(addSave(ability)),
  removeSaveProf: () => dispatch(removeSave(ability)),
})

export default connect(
  mapState,
  mapDispatch
)(AbilityScore)
