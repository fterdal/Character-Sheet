// NOTE: Eventually, we'll calculate each of these stats from ability
// modifiers and the user will be able to customize with misc modifiers.

// ACTION TYPES
const SET_PROFICIENCY = 'SET_PROFICIENCY'
const SET_SPEED = 'SET_SPEED'
const SET_MAX_HP = 'SET_MAX_HP'
const SET_CURRENT_HP = 'SET_CURRENT_HP'
const SET_ARMOR_CLASS = 'SET_ARMOR_CLASS'
const SET_HIT_DICE = 'SET_HIT_DICE'

// ACTION CREATORS
export const setProf = prof => ({ type: SET_PROFICIENCY, prof })
export const setSpeed = speed => ({ type: SET_SPEED, speed })
export const setMaxHP = maxHP => ({ type: SET_MAX_HP, maxHP })
export const setCurrentHP = currentHP => ({ type: SET_CURRENT_HP, currentHP })
export const setArmorClass = armorClass => ({
  type: SET_ARMOR_CLASS,
  armorClass,
})
/**
 * hit dice is an object like this:
 * { d6: 3, d10: 1 } for a character with 3d6+1d10 hit dice
 */
export const setHitDice = hitDice => ({
  type: SET_HIT_DICE,
  hitDice,
})

export const defaultStateCombatBasics = {
  prof: 0,
  speed: 30,
  maxHP: 0,
  currentHP: 0,
  armorClass: 10,
  hitDice: { },
}

const dispatchers = {
  [SET_PROFICIENCY]: (state, { prof }) => ({ ...state, prof }),
  [SET_SPEED]: (state, { speed }) => ({ ...state, speed }),
  [SET_MAX_HP]: (state, { maxHP }) => ({ ...state, maxHP }),
  [SET_CURRENT_HP]: (state, { currentHP }) => ({ ...state, currentHP }),
  [SET_ARMOR_CLASS]: (state, { armorClass }) => ({ ...state, armorClass }),
  [SET_HIT_DICE]: (state, { hitDice }) => {
    const newHitDice = Object.entries(hitDice).reduce((acc, [key, val]) => {
      if (val > 0) return { ...acc, [key]: val }
      return acc
    }, {})
    return { ...state, hitDice: newHitDice }
  },
}

export const combatBasicsReducer = (state = defaultStateCombatBasics, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
