import React from 'react'
import { connect } from 'react-redux'
import {
  abilityModifier,
  abilityModifierString,
  modifierString,
  abilityName,
} from './utils'
import { setSingleSkill } from '../redux'

const AbilitySkills = props => {
  // const { str, dex, int, wis, cha, skills, prof } = props
  // const strSkills = skills.filter(sk => sk.ability === 'str')
  // const dexSkills = skills.filter(sk => sk.ability === 'dex')
  const { prof, abilityScore, ability, skills } = props

  const calculateSkillMod = (abilityScore, prof, profBonus, misc) =>
    abilityModifier(abilityScore) + prof * profBonus + misc
  console.log('props', props)

  const handleChange = ({ target: { name, value } }, skill) => {
    // console.log('name', name)
    // console.log('value', value)
    if (name === 'misc') {
      props.editSingleSkill({
        ...skill,
        misc: Number(value),
      })
    }
  }
  return (
    <div>
      <div>
        <h2>
          {abilityName(ability)} {abilityModifierString(abilityScore)}
        </h2>
        <table>
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
                <td>
                  {calculateSkillMod(
                    abilityScore,
                    prof,
                    skill.profBonus,
                    skill.misc
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapState = ({ abilities, skills, combatBasics: { prof } }, ownProps) => ({
  // skills,
  prof,
  // header: ownProps.header,
  // abilitySkills: {
  ability: ownProps.ability,
  abilityScore: abilities[ownProps.ability],
  skills: skills.filter(sk => sk.ability === ownProps.ability),
  // },
})

const mapDispatch = dispatch => ({
  editSingleSkill: skill => dispatch(setSingleSkill(skill)),
})

export default connect(
  mapState,
  mapDispatch
)(AbilitySkills)
