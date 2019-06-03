// ACTION TYPES
const SET_PROFICIENCY = 'SET_PROFICIENCY'
const SET_SPEED = 'SET_SPEED'
const SET_MAX_HP = 'SET_MAX_HP'
const SET_CURRENT_HP = 'SET_CURRENT_HP'
const SET_ARMOR_CLASS = 'SET_ARMOR_CLASS'

// ACTION CREATORS
export const setProficiency = prof => ({ type: SET_PROFICIENCY, prof })
export const setSpeed = speed => ({ type: SET_SPEED, speed })
export const setMaxHP = maxHP => ({ type: SET_MAX_HP, maxHP })
export const setCurrentHP = currentHP => ({ type: SET_CURRENT_HP, currentHP })
export const setArmorClass = armorClass => ({
  type: SET_ARMOR_CLASS,
  armorClass,
})

const defaultState = {
  prof: 0,
  speed: 30,
  maxHP: 0,
  currentHP: 0,
  armorClass: 10,
}

const dispatchers = {
  [SET_PROFICIENCY]: (state, { proficiency }) => ({ ...state, proficiency }),
  [SET_SPEED]: (state, { speed }) => ({ ...state, speed }),
  [SET_MAX_HP]: (state, { maxHP }) => ({ ...state, maxHP }),
  [SET_CURRENT_HP]: (state, { currentHP }) => ({ ...state, currentHP }),
  [SET_ARMOR_CLASS]: (state, { armorClass }) => ({ ...state, armorClass }),
}

export const combatBasicsReducer = (state = defaultState, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
