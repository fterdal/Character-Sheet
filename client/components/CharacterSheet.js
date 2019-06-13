import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import Basics from './Basics'
import Abilities from './Abilities'
import { setEntireState } from '../redux'
import CombatBasics from './CombatBasics'
import Skills from './Skills'

import './CharacterSheet.scss'
const CharacterSheet = props => {
  useEffect(() => {
    try {
      const addressBar = decodeURI(props.history.location.search.slice(1))
      const newState = JSON.parse(addressBar)
      props.editEntireState(newState)
    } catch (err) {
      console.log('OOPS', err.message)
    }
  }, [])
  const copyLink = () => copy(window.location.href)
  return (
    <div>
      <button className="address-button" onClick={copyLink} type="button">
        COPY LINK
      </button>
      <div className="character-sheet-container">
        <Basics />
        <CombatBasics />
        <Abilities />
        <Skills />
      </div>
    </div>
  )
}

const mapDispatch = dispatch => ({
  editEntireState: entireState => dispatch(setEntireState(entireState)),
})

export default withRouter(
  connect(
    null,
    mapDispatch
  )(CharacterSheet)
)
