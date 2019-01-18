import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { Base64 } from 'js-base64'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

import { basicsReducer } from './basics'
import { abilitiesReducer } from './abilities'

// ACTION TYPES
// const SET_NAME = 'SET_NAME'
// const SET_RACE = 'SET_RACE'
// const SET_CHARACTER_CLASS = 'SET_CHARACTER_CLASS'


// ACTION CREATORS
// export const setName = (name) => ({
//   type: SET_NAME,
//   name,
// })
// export const setRace = (race) => ({
//   type: SET_RACE,
//   race,
// })
// export const setCharacterClass = (characterClass) => ({
//   type: SET_CHARACTER_CLASS,
//   characterClass,
// })

// const defaultState = {
//   name: '',
//   race: '',
//   characterClass: '',
// }

// const dispatchers = {
//   [SET_NAME]: (state, { name }) => ({...state, name }),
//   [SET_RACE]: (state, { race }) => ({...state, race }),
//   [SET_CHARACTER_CLASS]: (state, { characterClass }) =>
//     ({...state, characterClass }),
//   [SET_ENTIRE_STATE]: (state, { entireState }) => ({...entireState}),
// }

// const reducer = (state = defaultState, action) => {
//   if (action.type in dispatchers) {
//     return dispatchers[action.type](state, action)
//   }
//   return state
// }

const saveToAddressBar = store => next => action => {
  const result = next(action)
  const storeJSON = JSON.stringify(store.getState())
  // console.log('storeJSON', storeJSON)
  // const storeURLencoded = Base64.encodeURI(storeJSON)
  // console.log('storeURLencoded', storeURLencoded)
  history.replace(storeJSON)
  return result
}

const statsReducer = combineReducers({
  basics: basicsReducer,
  abilities: abilitiesReducer,
})

const SET_ENTIRE_STATE = 'SET_ENTIRE_STATE'
export const setEntireState = (entireState) => ({
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

const logger = createLogger({ collapsed: true })
export const store = createStore(
  containerReducer,
  composeWithDevTools(
    applyMiddleware(
      logger,
      saveToAddressBar,
    )
  )
)
