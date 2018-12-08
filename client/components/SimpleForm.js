import React from 'react'
import { withRouter } from 'react-router-dom'
import { Base64 } from 'js-base64'
import { compress, decompress } from 'lz-string'
import copy from 'copy-to-clipboard'
import { store } from '../redux'

// const loremIpsum = `
// Lorem ipsum dolor amet cray butcher asymmetrical raw denim. Try-hard vice cray poke. Health goth art party drinking vinegar slow-carb, truffaut gentrify plaid kogi tofu lyft quinoa vice cornhole iPhone. Chia pok pok artisan bespoke, hot chicken VHS cloud bread.
//
// Williamsburg tacos godard forage keytar mustache. Poke kombucha gentrify fanny pack letterpress ennui hella, waistcoat etsy brooklyn vegan. Echo park food truck post-ironic man bun crucifix sriracha pabst heirloom. Street art portland mlkshk distillery.
//
// Palo santo marfa you probably haven't heard of them four loko, man bun master cleanse occupy food truck sriracha. Banjo vaporware listicle tousled mlkshk. Hoodie tilde letterpress keytar readymade intelligentsia messenger bag yr authentic. Aesthetic kitsch godard marfa hashtag health goth, tumblr edison bulb copper mug before they sold out portland kinfolk. Brooklyn 8-bit semiotics copper mug, normcore small batch selvage paleo hell of.
//
// Forage wayfarers waistcoat organic knausgaard, sartorial kitsch hella four loko hell of synth vinyl XOXO vice. Shabby chic raclette whatever leggings, man bun kogi tote bag cold-pressed tbh try-hard hella edison bulb. Trust fund 90's sartorial, kickstarter franzen pour-over snackwave pork belly literally jianbing cred fam lyft vape. Humblebrag pop-up twee skateboard hexagon chartreuse pinterest etsy mixtape 3 wolf moon tousled williamsburg. Seitan franzen art party pop-up. Kitsch cloud bread edison bulb man bun before they sold out chia banjo unicorn. Lyft mixtape air plant four dollar toast aesthetic pabst.
//
// Glossier copper mug four dollar toast, brunch irony wayfarers health goth celiac ramps literally vape fingerstache. Sustainable artisan health goth pickled viral hella. Cloud bread intelligentsia meh, subway tile jean shorts XOXO wolf salvia celiac trust fund helvetica asymmetrical cardigan gluten-free hella. Chillwave raclette street art actually pinterest poutine, chicharrones hot chicken farm-to-table woke cray.
//
// Mumblecore shoreditch tbh, banjo pug swag actually. Pok pok chillwave polaroid meditation, next level banh mi edison bulb prism skateboard. PBR&B deep v marfa, waistcoat roof party next level beard stumptown. Hoodie adaptogen tbh brooklyn helvetica live-edge coloring book shoreditch la croix. Meh vinyl crucifix shabby chic pitchfork, squid fashion axe distillery seitan neutra cardigan activated charcoal pinterest kinfolk. Sriracha salvia +1 hella. Pabst before they sold out pok pok austin pickled.
//
// XOXO vape viral, vegan kitsch gluten-free vaporware stumptown air plant tofu man braid put a bird on it plaid twee. Wayfarers freegan twee palo santo next level raclette knausgaard. Vegan actually prism, la croix mustache roof party farm-to-table raw denim af green juice raclette seitan keytar poutine succulents. Enamel pin mustache snackwave everyday carry yuccie locavore gastropub master cleanse kitsch pickled shaman biodiesel fashion axe knausgaard. Shaman mixtape asymmetrical you probably haven't heard of them biodiesel. Copper mug green juice subway tile meh flannel literally.
//
// Sriracha tacos church-key affogato gochujang etsy typewriter hashtag. Seitan activated charcoal lyft, etsy VHS semiotics church-key raclette +1 hot chicken. 3 wolf moon PBR&B letterpress taxidermy art party twee deep v. Seitan pour-over semiotics narwhal. Cloud bread brunch aesthetic, twee shoreditch keffiyeh chambray hoodie post-ironic 3 wolf moon dreamcatcher poke. Distillery health goth 3 wolf moon asymmetrical cold-pressed occupy chillwave kogi.
//
// Actually waistcoat iceland lo-fi. Intelligentsia green juice paleo, keytar fingerstache meggings kickstarter glossier food truck vice. Kombucha live-edge keytar cloud bread poutine leggings lumbersexual ramps readymade church-key. Polaroid hoodie meditation bushwick, gastropub mumblecore raw denim cred fashion axe you probably haven't heard of them bicycle rights. Trust fund retro bespoke marfa. Keytar schlitz cray succulents. Biodiesel YOLO deep v, af waistcoat disrupt tote bag raw denim keytar salvia venmo subway tile.
//
// Freegan pork belly food truck franzen locavore subway tile distillery taxidermy slow-carb sartorial pour-over hexagon mumblecore williamsburg edison bulb. Umami pickled PBR&B vegan viral microdosing locavore. Kombucha banh mi snackwave mumblecore fixie. Raclette irony vice, whatever biodiesel hell of beard. Listicle chambray bicycle rights, shoreditch succulents meditation put a bird on it air plant. Sartorial occupy marfa cliche fixie poutine mixtape direct trade hoodie godard pork belly mustache neutra taiyaki umami. Ugh green juice fanny pack, succulents mustache fingerstache etsy tote bag pickled venmo pabst ennui health goth four loko.
//
// Austin cronut jianbing, stumptown organic meggings intelligentsia coloring book chartreuse letterpress raw denim biodiesel. La croix lyft polaroid snackwave iPhone ugh blog XOXO mustache. Pabst raw denim kickstarter helvetica. Swag church-key fanny pack cardigan, sartorial forage PBR&B glossier fashion axe four loko pok pok crucifix air plant poke.
//
// Art party roof party enamel pin seitan. DIY 90's ennui narwhal williamsburg craft beer. Vape gluten-free air plant tousled sartorial asymmetrical banh mi salvia pickled slow-carb XOXO gentrify green juice. Roof party four dollar toast la croix typewriter tumeric copper mug. IPhone gochujang you probably haven't heard of them heirloom.
//
// Tattooed brooklyn flexitarian, glossier taiyaki banjo gochujang leggings hella enamel pin. Raw denim selvage forage vape tumeric snackwave actually lo-fi farm-to-table pabst selfies organic craft beer ethical tousled. Tumeric portland umami crucifix offal selfies. Biodiesel ennui edison bulb, knausgaard tote bag before they sold out cray meh ramps cornhole roof party vice raclette gentrify master cleanse. Meditation authentic schlitz, shoreditch shaman shabby chic pok pok pug yr roof party. Bushwick microdosing ugh artisan everyday carry pour-over.
//
// Flexitarian readymade williamsburg gentrify hammock. Street art 90's tilde, master cleanse chia meh lo-fi letterpress fashion axe wolf banjo subway tile vegan heirloom. Put a bird on it waistcoat af craft beer salvia banjo. Slow-carb austin XOXO, coloring book actually flannel street art. Semiotics authentic post-ironic organic artisan shoreditch snackwave. Sustainable semiotics vape single-origin coffee. Gastropub portland cold-pressed trust fund etsy celiac humblebrag sriracha cronut woke polaroid kickstarter hammock.
//
// Jean shorts taxidermy tilde adaptogen. Synth salvia deep v cray poutine small batch tofu retro gentrify enamel pin literally. Af disrupt ethical direct trade stumptown, meh swag sustainable roof party yuccie single-origin coffee. Man braid deep v direct trade normcore, pop-up cred coloring book lo-fi aesthetic kitsch. Bushwick skateboard twee, roof party blue bottle pok pok tumblr locavore single-origin coffee palo santo bitters aesthetic. Actually master cleanse succulents asymmetrical sartorial chillwave cred plaid paleo.
// `
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
