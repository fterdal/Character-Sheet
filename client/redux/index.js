import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

// ACTION TYPES
const SET_NAME = 'SET_NAME'
const SET_RACE = 'SET_RACE'
const SET_CHARACTER_CLASS = 'SET_CHARACTER_CLASS'

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

const defaultState = {
  name: '',
  race: '',
  class: '',
}

const dispatchers = {
  [SET_NAME]: (state, { name }) => ({...state, name }),
  [SET_RACE]: (state, { race }) => ({...state, race }),
  [SET_CHARACTER_CLASS]: (state, { characterClass }) => ({...state, characterClass }),
}

const reducer = (state = defaultState, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}

export const store = createStore(
  reducer,
  applyMiddleware(logger)
)
