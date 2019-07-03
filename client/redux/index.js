import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

import { basicsReducer } from './basics'
import { abilitiesReducer } from './abilities'
import { combatBasicsReducer } from './combat-basics'
import { skillsReducer } from './skills'
import { spellsReducer } from './spells'

const saveToAddressBar = store => next => action => {
  const result = next(action)
  const storeJSON = JSON.stringify(store.getState())
  console.log('storeJSON length', storeJSON.length)
  history.replace(`?${storeJSON}`)
  return result
}

const statsReducer = combineReducers({
  basics: basicsReducer,
  abilities: abilitiesReducer,
  combatBasics: combatBasicsReducer,
  skills: skillsReducer,
  spells: spellsReducer,
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

export * from './basics'
export * from './abilities'
export * from './combat-basics'
export * from './skills'
export * from './spells'

const logger = createLogger({ collapsed: true })
export const store = createStore(
  containerReducer,
  composeWithDevTools(applyMiddleware(logger, saveToAddressBar))
)
