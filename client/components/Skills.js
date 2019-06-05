import React from 'react'
import { connect } from 'react-redux'
import { abilityModifier, abilityModifierString, modifierString } from './utils'
import { setSingleSkill } from '../redux'

// Given proficiency
const calculateSkillMod = () => {}

const Skills = props => {
  const { str, dex, int, wis, cha, skills } = props
  const strSkills = skills.filter(sk => sk.ability === 'str')
  const dexSkills = skills.filter(sk => sk.ability === 'dex')
  console.log(strSkills)
  const handleChange = ({ target: { name, value } }, skill) => {
    // DO THINGS HERE
    console.log('name', name)
    console.log('value', value)
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
        <h2>Dexterity {abilityModifierString(dex)}</h2>
        <table>
          <tbody>
            <tr>
              <th>&nbsp;</th>
              <th>Proficiency</th>
              <th>Misc</th>
              <th>Total</th>
            </tr>
            {dexSkills.map(dexSkill => (
              <tr key={dexSkill.name}>
                <td>{dexSkill.name}</td>
                <td>
                  <select
                    name="profBonus"
                    value={dexSkill.profBonus}
                    onChange={evt => handleChange(evt, dexSkill)}
                  >
                    <option value={0}>Not proficient</option>
                    <option value={0.5}>Half proficiency</option>
                    <option value={1}>Proficient</option>
                    <option value={2}>Double proficiency</option>
                  </select>
                </td>
                <td>
                  <input
                    name="misc"
                    value={dexSkill.misc}
                    onChange={evt => handleChange(evt, dexSkill)}
                    type="number"
                  />
                </td>
                <td>{modifierString(abilityModifier(dex) + dexSkill.misc)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div>
        <h2>Strength {abilityModifierString(str)}</h2>
        <table>
          <tbody>
            <tr>
              <th>&nbsp;</th>
              <th>Proficiency</th>
              <th>Misc</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>Athletics</td>
              <td>
                <select defaultValue={0}>
                  <option value={0}>Not proficient</option>
                  <option value={0.5}>Half proficiency</option>
                  <option value={1}>Proficient</option>
                  <option value={2}>Double proficiency</option>
                </select>
              </td>
              <td>
                <input defaultValue={0} type="number" />
              </td>
              <td>{abilityModifierString(str)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const mapState = ({
  abilities: { str, dex, int, wis, cha },
  skills,
  combatBasics: { prof },
}) => ({
  str,
  dex,
  int,
  wis,
  cha,
  skills,
  prof,
})

const mapDispatch = dispatch => ({
  editSingleSkill: skill => dispatch(setSingleSkill(skill)),
})

export default connect(
  mapState,
  mapDispatch
)(Skills)
