import React from 'react'
import { connect } from 'react-redux'
import {
  abilityModifier,
  abilityModifierString,
  modifierString,
  abilityName,
} from './utils'
import { setSingleSkill } from '../redux'

import './AbilitySkills.scss'
const AbilitySkills = props => {
  const { prof, abilityScore, ability, skills, editSingleSkill } = props

  const calculateSkillMod = (profBonus, misc) =>
    modifierString(
      abilityModifier(abilityScore) + Math.floor(prof * profBonus) + misc
    )

  const handleChange = ({ target: { name, value } }, skill) => {
    if (['misc', 'profBonus'].includes(name)) {
      editSingleSkill({
        ...skill,
        [name]: Number(value),
      })
    }
  }
  return (
    <div className="ability-skills-container">
      <table>
        <thead className="ability-skills-header">
          <tr>
            <th colSpan="4">
              {abilityName(ability)} {abilityModifierString(abilityScore)}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>&nbsp;</th>
            <th>Proficiency</th>
            <th>Misc</th>
            <th>Total</th>
          </tr>
          {skills.map(skill => (
            <tr key={skill.name}>
              <td>{skill.name}</td>
              <td>
                <select
                  name="profBonus"
                  value={skill.profBonus}
                  onChange={evt => handleChange(evt, skill)}
                >
                  <option value={0}>-</option>
                  <option value={0.5}>Half proficiency</option>
                  <option value={1}>Proficient</option>
                  <option value={2}>Double proficiency</option>
                </select>
              </td>
              <td>
                <input
                  name="misc"
                  value={skill.misc}
                  onChange={evt => handleChange(evt, skill)}
                  type="number"
                />
              </td>
              <td>{calculateSkillMod(skill.profBonus, skill.misc)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const mapState = ({ abilities, skills, combatBasics: { prof } }, ownProps) => ({
  prof,
  ability: ownProps.ability,
  abilityScore: abilities[ownProps.ability],
  skills: skills.filter(sk => sk.ability === ownProps.ability),
})

const mapDispatch = dispatch => ({
  editSingleSkill: skill => dispatch(setSingleSkill(skill)),
})

export default connect(
  mapState,
  mapDispatch
)(AbilitySkills)
