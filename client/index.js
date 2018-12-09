import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import { CharacterSheet } from './components'

class App extends React.Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <Router>
            <CharacterSheet />
          </Router>
        </Provider>
      </div>
    )
  }
}

render(
  <App />,
  document.getElementById('app')
)
