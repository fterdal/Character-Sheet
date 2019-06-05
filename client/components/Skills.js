import React from 'react'
import { connect } from 'react-redux'
import { modifier, modifierString } from './utils'

// Given proficiency
const calculateSkillMod = () => {

}

const Skills = props => {
  const { str, dex, int, wis, cha, skills } = props
  const { str: strSkills } = skills
  console.log(strSkills)
  // const handleChange = ({ target: { name, value } }) => {}
  return (
    <div>
      Skills:
      <div>
        <div>Strength {modifierString(str)}</div>
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
              <td>{modifierString(str)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* <div></div> */}
      {/* <table className="skills">
        <tbody>
          <tr>
            <th scope="col">Skill</th>
            <th scope="col">Proficient</th>
            <th scope="col">Ability Mod</th>
            <th scope="col">Misc Mod</th>
            <th scope="col">Total Mod</th>
          </tr>
          <tr />
        </tbody>
      </table> */}
    </div>
  )
}

const mapState = ({ abilities: { str, dex, int, wis, cha }, skills, combatBasics: { prof } }) => ({
  str,
  dex,
  int,
  wis,
  cha,
  skills,
  prof,
})

// const mapDispatch = dispatch => ({
//   editStr: str => dispatch(setStr(str)),
//   editDex: dex => dispatch(setDex(dex)),
//   editCon: con => dispatch(setCon(con)),
//   editInt: int => dispatch(setInt(int)),
//   editWis: wis => dispatch(setWis(wis)),
//   editCha: cha => dispatch(setCha(cha)),
// })

export default connect(
  mapState
  // mapDispatch
)(Skills)
