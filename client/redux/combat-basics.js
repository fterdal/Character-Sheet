// NOTE: Eventually, we'll calculate each of these stats from ability
// modifiers and the user will be able to customize with misc modifiers.

// ACTION TYPES
const SET_PROFICIENCY = 'SET_PROFICIENCY'
const SET_SPEED = 'SET_SPEED'
const SET_MAX_HP = 'SET_MAX_HP'
const SET_CURRENT_HP = 'SET_CURRENT_HP'
const SET_ARMOR = 'SET_ARMOR'
const SET_SHIELD = 'SET_SHIELD'
const SET_AC_MISC = 'SET_AC_MISC'
const SET_INIT_MISC = 'SET_INIT_MISC'
const SET_INIT_PROF = 'SET_INIT_PROF'
const SET_INIT_ABILITY = 'SET_INIT_ABILITY'
const SET_HIT_DICE = 'SET_HIT_DICE'

// ACTION CREATORS
export const setProf = prof => ({ type: SET_PROFICIENCY, prof })
export const setSpeed = speed => ({ type: SET_SPEED, speed })
export const setMaxHP = maxHP => ({ type: SET_MAX_HP, maxHP })
export const setCurrentHP = currentHP => ({ type: SET_CURRENT_HP, currentHP })
export const setArmor = armor => ({ type: SET_ARMOR, armor })
export const setShield = shield => ({ type: SET_SHIELD, shield })
export const setACMisc = acMisc => ({ type: SET_AC_MISC, acMisc })
export const setInitMisc = initMisc => ({ type: SET_INIT_MISC, initMisc })
export const setInitProf = initProf => ({ type: SET_INIT_PROF, initProf })
/* By default, we only add dex to initiative. But sometimes, we add additional ability mods */
export const setInitAbility = initAbility => ({
  type: SET_INIT_ABILITY,
  initAbility,
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
  armor: 10,
  shield: 0,
  acMisc: 0,
  initMisc: 0,
  initProf: 0,
  initAbility: '',
  hitDice: {},
}

const dispatchers = {
  [SET_PROFICIENCY]: (state, { prof }) => ({ ...state, prof: Number(prof) }),
  [SET_SPEED]: (state, { speed }) => ({ ...state, speed: Number(speed) }),
  [SET_MAX_HP]: (state, { maxHP }) => ({ ...state, maxHP: Number(maxHP) }),
  [SET_CURRENT_HP]: (state, { currentHP }) => ({
    ...state,
    currentHP: Number(currentHP),
  }),
  [SET_ARMOR]: (state, { armor }) => ({ ...state, armor: Number(armor) }),
  [SET_SHIELD]: (state, { shield }) => ({ ...state, shield: Number(shield) }),
  [SET_AC_MISC]: (state, { acMisc }) => ({ ...state, acMisc: Number(acMisc) }),
  [SET_INIT_MISC]: (state, { initMisc }) => ({
    ...state,
    initMisc: Number(initMisc),
  }),
  [SET_INIT_PROF]: (state, { initProf }) => {
    if (![0, 0.5, 1, 2].includes(initProf)) return state
    return {
      ...state,
      initProf: Number(initProf),
    }
  },
  [SET_INIT_ABILITY]: (state, { initAbility }) => ({
    ...state,
    initAbility,
  }),
  [SET_HIT_DICE]: (state, { hitDice }) => {
    const newHitDice = Object.entries(hitDice).reduce((acc, [key, val]) => {
      if (val > 0) return { ...acc, [key]: val }
      return acc
    }, {})
    return { ...state, hitDice: newHitDice }
  },
}

export const combatBasicsReducer = (
  state = defaultStateCombatBasics,
  action
) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
