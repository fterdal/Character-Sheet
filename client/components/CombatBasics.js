import React from 'react'
import { connect } from 'react-redux'
import { abilityModifier } from './utils'
import HitDice from './HitDice'
import HitPoints from './HitPoints'
import ArmorClass from './ArmorClass'
import Speed from './Speed'
import Proficiency from './Proficiency'
import Initiative from './Initiative'

import './CombatBasics.scss'
const CombatBasics = props => {
  const { dex } = props
  const initiative = abilityModifier(dex)
  return (
    <div className="combat-basics">
      <div className="row">
        <HitDice />
        <HitPoints />
        <ArmorClass />
      </div>
      <div className="row">
        <Speed />
        <Initiative />
        <Proficiency />
      </div>
      <div>
        <label>Initiative: </label>
        <span>{initiative}</span>
      </div>
    </div>
  )
}

const mapState = ({ abilities: { dex } }) => ({ dex })

export default connect(mapState)(CombatBasics)
