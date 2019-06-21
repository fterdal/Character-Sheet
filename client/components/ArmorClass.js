import React from 'react'
import { connect } from 'react-redux'
import { setArmor, setShield, setACMisc } from '../redux'
import { abilityModifier, abilityModifierString } from './utils'

import './ArmorClass.scss'
const ArmorClass = props => {
  const {
    armor,
    shield,
    acMisc,
    dex,
    editArmor,
    editShield,
    editACMisc,
  } = props
  const totalAC = armor + shield + acMisc + abilityModifier(dex)
  return (
    <div className="armor-class">
      <div className="armor-class-title" htmlFor="armorClass">
        AC
      </div>
      <div className="armor-class-total">
        {totalAC}
      </div>
      <div className="armor-class-editor">
        <div>
          <label htmlFor="armor">Armor </label>
          <input
            type="number"
            name="armor"
            value={armor}
            onChange={({ target: { value } }) => editArmor(value)}
          />
        </div>
        <div>
          <label htmlFor="shield">Shield </label>
          <input
            type="number"
            name="shield"
            value={shield}
            onChange={({ target: { value } }) => editShield(value)}
          />
        </div>
        <div>
          <label htmlFor="acMisc">Misc </label>
          <input
            type="number"
            name="acMisc"
            value={acMisc}
            onChange={({ target: { value } }) => editACMisc(value)}
          />
        </div>
        <div>
          <label>Dex </label>
          <div className="armor-dex">{abilityModifier(dex)}</div>
        </div>
      </div>
    </div>
  )
}

const mapState = ({
  combatBasics: { armor, shield, acMisc },
  abilities: { dex },
}) => ({
  armor,
  shield,
  acMisc,
  dex,
})

const mapDispatch = dispatch => ({
  editArmor: armor => dispatch(setArmor(armor)),
  editShield: shield => dispatch(setShield(shield)),
  editACMisc: acMisc => dispatch(setACMisc(acMisc)),
})

export default connect(
  mapState,
  mapDispatch
)(ArmorClass)
