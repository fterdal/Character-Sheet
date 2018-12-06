import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter,
} from 'react-router-dom'

const Home = () => (
  <h2>Home</h2>
)

const Work = () => (
  <h2>Work</h2>
)

class SomeForm extends React.Component {
  state = { addressBar: '' }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.history.replace('place')
  }
  render() {
    console.log('SOME FORM PROPS', this.props)
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" />
        <button type="submit">Save</button>
      </form>
    )
  }
}

const RouterForm = withRouter(SomeForm)

const App = () => (
  <div>
    <Router>
      <div>
        <RouterForm />
        <Link to="/">Home</Link>
        <br />
        <Link to="/work">Work</Link>
        <Switch>
          <Route path="/work" component={Work} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)
