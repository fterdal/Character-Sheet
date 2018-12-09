import React from 'react'
import { withRouter } from 'react-router-dom'
import { Base64 } from 'js-base64'
import { compress, decompress } from 'lz-string'
import copy from 'copy-to-clipboard'
import { store } from '../redux'

const loremIpsum = 'Lorem Ipsum '.repeat(1000)
const compressed = compress(loremIpsum)
// console.log('BEFORE', loremIpsum.length)
// console.log('AFTER', compressed.length)

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
  addLorem = () => {
    this.setState({
      addressBar: loremIpsum
    }, () => {
      this.props.history.replace(this.state.addressBar)
    })
  }
  copyLink = () => {
    copy(`http://localhost:8080/${this.state.addressBar}`)
  }
  componentDidMount() {
    console.log(store.getState())
    this.setState({ addressBar: this.props.history.location.pathname.slice(1) })
  }
  render() {
    const encodedAddressBar = Base64.encodeURI(this.state.addressBar)
    // console.log('encodedAddressBar: ', encodedAddressBar)
    return (
      <div>
        <h1>Length: {this.state.addressBar.length}</h1>
        <label htmlFor="addressBar">Address Bar </label>
        <button className="address-button" onClick={this.addLorem}>Add Lorem</button>
        <button className="address-button" onClick={this.copyLink}>COPY LINK</button>
        <br />
        <textarea
          name="addressBar"
          style={{ width: '80%', height: '200px', }}
          value={this.state.addressBar}
          onChange={this.handleChange}
        />
      </div>
    )
  }
}

export default withRouter(SomeForm)
