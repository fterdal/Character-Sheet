import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { Base64 } from 'js-base64'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

import { basicsReducer } from './basics'
import { abilitiesReducer } from './abilities'
import { combatBasicsReducer } from './combat-basics'
import { skillsReducer } from './skills'

const saveToAddressBar = store => next => action => {
  // NOTE: Consider setting up a throttle here, wherein every few seconds
  // it uses push instead of replace. In this way, the user will have a record
  // of changes in their browser history (press 'back' to undo changes)

  // ALSO: Consider using something like MessagePack to compress to address bar
  // https://msgpack.org/index.html
  const result = next(action)
  const storeJSON = JSON.stringify(store.getState())
  console.log('storeJSON length', storeJSON.length)
  history.replace(storeJSON)
  return result
}

const statsReducer = combineReducers({
  basics: basicsReducer,
  abilities: abilitiesReducer,
  combatBasics: combatBasicsReducer,
  skills: skillsReducer,
})

const SET_ENTIRE_STATE = 'SET_ENTIRE_STATE'
export const setEntireState = entireState => ({
  type: SET_ENTIRE_STATE,
  entireState,
})

const containerReducer = (state, action) => {
  if (action.type === SET_ENTIRE_STATE) {
    return action.entireState
  }
  return statsReducer(state, action)
}

/*
  This error popped up when adding a double slash in one of the fields:
  http://localhost:8080/%7B%22name%22:%22Finn%22,%22race%22:%22Elf%22,%22characterClass%22:%22Wizard/%7B%22name%22:%22Finn%22,%22race%22:%22Elf%22,%22characterClass%22:%22Wizard////(Necromancer)%22%7D
*/

export * from './basics'
export * from './abilities'
export * from './combat-basics'
export * from './skills'

const logger = createLogger({ collapsed: true })
export const store = createStore(
  containerReducer,
  composeWithDevTools(applyMiddleware(logger, saveToAddressBar))
)
