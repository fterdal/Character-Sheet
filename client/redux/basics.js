// ACTION TYPES
const SET_NAME = 'SET_NAME'
const SET_RACE = 'SET_RACE'
const SET_CHAR_CLASS = 'SET_CHAR_CLASS'

// ACTION CREATORS
export const setName = (name) => ({ type: SET_NAME, name })
export const setRace = (race) => ({ type: SET_RACE, race })
export const setCharClass = (charClass) => ({ type: SET_CLASS, charClass })

const defaultState = {
  name: '',
  race: '',
  charClass: '',
}

const dispatchers = {
  [SET_NAME]: (state, { name }) => ({ ...state, name }),
  [SET_RACE]: (state, { race }) => ({ ...state, race }),
  [SET_CHAR_CLASS]: (state, { charClass }) => ({ ...state, charClass }),
}

export const basicsReducer = (state = defaultState, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
