import React from 'react'
import { withRouter } from 'react-router-dom'
import { Base64 } from 'js-base64'

class SomeForm extends React.Component {
  state = { addressBar: '' }
  handleSubmit = (e) => {
    e.preventDefault()
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    }, () => {
      this.props.history.replace(this.state.addressBar)
    })
  }
  componentDidMount() {
    console.log('location: ', this.props.history.location.pathname.slice(1))
    this.setState({ addressBar: this.props.history.location.pathname.slice(1) })
  }
  render() {
    const encodedAddressBar = Base64.encodeURI(this.state.addressBar)
    console.log('encodedAddressBar: ', encodedAddressBar)
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="addressBar" value={this.state.addressBar} onChange={this.handleChange} type="text" />
        <button className="save-button" type="submit">Save</button>
      </form>
    )
  }
}

export default withRouter(SomeForm)
