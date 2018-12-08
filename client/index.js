import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import SimpleForm from './SimpleForm'
import { store } from './redux'

const App = () => (
  <div>
    <Router>
      <div>
        <SimpleForm />
      </div>
    </Router>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)
