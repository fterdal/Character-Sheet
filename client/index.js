import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { store } from './redux'
import { SimpleForm, CharacterSheet } from './components'

const App = () => (
  <div>
    <Router>
      <div>
        <CharacterSheet />
      </div>
    </Router>
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
