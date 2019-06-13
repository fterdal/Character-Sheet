// ACTION TYPES
const SET_ABILITY = 'SET_ABILITY'

const SET_SAVES = 'SET_SAVES'
const ADD_SAVE = 'SET_SAVE'
const REMOVE_SAVE = 'REMOVE_SAVE'

// ACTION CREATORS
export const setAbility = (ability, score) => ({
  type: SET_ABILITY,
  ability,
  score,
})
export const setSaves = saves => ({ type: SET_SAVES, saves })
export const addSave = save => ({ type: ADD_SAVE, save })
export const removeSave = save => ({ type: REMOVE_SAVE, save })

export const defaultStateAbilities = {
  str: 10,
  dex: 10,
  con: 10,
  int: 10,
  wis: 10,
  cha: 10,
  saves: [],
}

const abilities = ['str', 'dex', 'con', 'int', 'wis', 'cha']

const dispatchers = {
  [SET_ABILITY]: (state, { ability, score }) => {
    if (!abilities.includes(ability)) return state
    return { ...state, [ability]: score }
  },
  [SET_SAVES]: (state, { saves }) => ({ ...state, saves }),
  [ADD_SAVE]: (state, { save }) => {
    if (state.saves.includes(save)) return state
    return { ...state, saves: [...state.saves, save] }
  },
  [REMOVE_SAVE]: (state, { save }) => ({
    ...state,
    saves: state.saves.filter(sv => sv !== save),
  }),
}

export const abilitiesReducer = (state = defaultStateAbilities, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
