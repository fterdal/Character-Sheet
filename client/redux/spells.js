// ACTION TYPES
const SET_SPELLS = 'SET_SPELLS'

// ACTION CREATORS
export const setSpells = spells => ({ type: SET_SPELLS, spells })

/* Spells look like this:
{
  name: 'Magic Missile',
  lvl: 1,
  cast: false,
}
*/

export const defaultStateSpells = [
  {
    name: 'Light',
    lvl: 0,
    cast: false,
  },
  {
    name: 'Magic Missile',
    lvl: 1,
    cast: true,
  },
  {
    name: 'Fireball',
    lvl: 3,
    cast: false,
  },
]

const dispatchers = {
  [SET_SPELLS]: (state, { spells }) => ({ ...state, spells }),
}

export const spellsReducer = (state = defaultStateSpells, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
