import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import Basics from './Basics'
import {
  store,
  setName,
  setRace,
  setCharClass,
  setEntireState,
} from '../redux'

class CharacterSheet extends React.Component {
  componentDidMount() {
    try {
      const addressBar = this.props.history.location.pathname.slice(1)
      console.log('addressBar', JSON.parse(addressBar))
      const newState = JSON.parse(addressBar)
      this.props.editEntireState(newState)
    } catch(e) {
      console.log('OOPS', e.message)
    }
  }
  setDummyData = () => {
    this.props.editEntireState({
      name: 'Tom',
      race: 'Dwarf',
      characterClass: 'Cleric',
    })
  }
  copyLink = () => {
    const stringifiedState = JSON.stringify(store.getState())
    copy(`http://localhost:8080/${stringifiedState}`)
  }
  render() {
    const {
      name, race, charClass,
      editName, editRace, editCharacterClass,
    } = this.props
    return (
      <div>
        <button
          className="address-button"
          onClick={this.setDummyData}
          type="button">
            SET DUMMY DATA
        </button>
        <button
          className="address-button"
          onClick={this.copyLink}
          type="button">
            COPY LINK
        </button>
        <br />
        <Basics />
      </div>
    )
  }
}

const mapDispatch = (dispatch) => ({
  editEntireState: (entireState) =>
    dispatch(setEntireState(entireState)),
})

export default withRouter(
  connect(
    null,
    mapDispatch
  )(CharacterSheet)
)
