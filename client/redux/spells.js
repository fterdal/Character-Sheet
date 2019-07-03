// ACTION TYPES
const SET_SPELLS = 'SET_SPELLS'

// ACTION CREATORS
export const setSpells = (spells) => ({ type: SET_SPELLS, spells })

export const defaultStateSpells = {
  spells: [],
}

const dispatchers = {
  [SET_SPELLS]: (state, { spells }) => ({ ...state, spells }),
}

export const spellsReducer = (state = defaultStateSpells, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
