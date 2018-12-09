import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { createBrowserHistory } from 'history'
const history = createBrowserHistory()

// ACTION TYPES
const SET_NAME = 'SET_NAME'
const SET_RACE = 'SET_RACE'
const SET_CHARACTER_CLASS = 'SET_CHARACTER_CLASS'
const SET_ENTIRE_STATE = 'SET_ENTIRE_STATE'

// ACTION CREATORS
export const setName = (name) => ({
  type: SET_NAME,
  name,
})
export const setRace = (race) => ({
  type: SET_RACE,
  race,
})
export const setCharacterClass = (characterClass) => ({
  type: SET_CHARACTER_CLASS,
  characterClass,
})
export const setEntireState = (entireState) => ({
  type: SET_ENTIRE_STATE,
  entireState,
})

const defaultState = {
  name: '',
  race: '',
  characterClass: '',
}

const dispatchers = {
  [SET_NAME]: (state, { name }) => ({...state, name }),
  [SET_RACE]: (state, { race }) => ({...state, race }),
  [SET_CHARACTER_CLASS]: (state, { characterClass }) =>
    ({...state, characterClass }),
  [SET_ENTIRE_STATE]: (state, { entireState }) => ({...entireState}),
}

const reducer = (state = defaultState, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}

const saveToAddressBar = store => next => action => {
  const result = next(action)
  const storeJSON = JSON.stringify(store.getState())
  console.log('storeJSON', storeJSON)
  // console.log('HISTORY!!!! ', history)
  return result
}

const logger = createLogger({ collapsed: true })
export const store = createStore(
  reducer,
  applyMiddleware(
    logger,
    saveToAddressBar,
  )
)
