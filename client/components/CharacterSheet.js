import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import copy from 'copy-to-clipboard'
import Basics from './Basics'
import Abilities from './Abilities'
import {
  store,
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
  copyLink = () => {
    const stringifiedState = JSON.stringify(store.getState())
    copy(`http://localhost:8080/${stringifiedState}`)
  }
  render() {
    return (
      <div>
        <button
          className="address-button"
          onClick={this.copyLink}
          type="button">
            COPY LINK
        </button>
        <br />
        <Basics />
        <Abilities />
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
