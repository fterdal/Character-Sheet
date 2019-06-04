import React from 'react'
import { connect } from 'react-redux'
import { modifier, modifierStr } from './utils'

const Skills = props => {
  const { str, dex, int, wis, cha, skills } = props
  const { str: strSkills } = skills
  console.log(strSkills)
  // const handleChange = ({ target: { name, value } }) => {}
  return (
    <div>
      Skills:
      <div>
        <div>Strength {modifierStr(str)}</div>
        <table>
          <tbody>
            <tr>
              <td />
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

const mapState = ({ abilities: { str, dex, int, wis, cha }, skills }) => ({
  str,
  dex,
  int,
  wis,
  cha,
  skills,
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
