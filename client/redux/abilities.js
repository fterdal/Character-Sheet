// ACTION TYPES
const SET_STR = 'SET_STR'
const SET_DEX = 'SET_DEX'
const SET_CON = 'SET_CON'
const SET_INT = 'SET_INT'
const SET_WIS = 'SET_WIS'
const SET_CHA = 'SET_CHA'

// ACTION CREATORS
export const setStr = (str) => ({ type: SET_STR, str })
export const setDex = (dex) => ({ type: SET_DEX, dex })
export const setCon = (con) => ({ type: SET_CON, con })
export const setInt = (int) => ({ type: SET_INT, int })
export const setWis = (wis) => ({ type: SET_WIS, wis })
export const setCha = (cha) => ({ type: SET_CHA, cha })

export const defaultStateAbilities = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
}

const dispatchers = {
  [SET_STR]: (state, { str }) => ({...state, str }),
  [SET_DEX]: (state, { dex }) => ({...state, dex }),
  [SET_CON]: (state, { con }) => ({...state, con }),
  [SET_INT]: (state, { int }) => ({...state, int }),
  [SET_WIS]: (state, { wis }) => ({...state, wis }),
  [SET_CHA]: (state, { cha }) => ({...state, cha }),
}

export const abilitiesReducer = (state = defaultStateAbilities, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
