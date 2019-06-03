import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import { CharacterSheet } from './components'

const App = () => {
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

render(<App />, document.getElementById('app'))
