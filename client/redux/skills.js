/*
Strength:
Athletics

Dexterity:
Acrobatics
Sleight of Hand
Stealth

Intelligence:
Arcana
History
Investigation
Nature
Religion

Wisdom:
Animal Handling
Insight
Medicine
Perception
Survival

Charisma:
Deception
Intimidation
Performance
Persuasion
*/

// ACTION TYPES
const SET_SKILLS = 'SET_SKILLS'
const SET_SINGLE_SKILL = 'SET_SINGLE_SKILL'

// ACTION CREATORS
export const setSkills = skills => ({ type: SET_SKILLS, skills })
export const setSingleSkill = skill => ({ type: SET_SINGLE_SKILL, skill })

// In most cases, the proficiency bonus does not apply to a skill.
// In some cases, it applies 1/2 or 2x. So the profBonus is how much
// to multiply the proficiency bonus by.
export const defaultStateSkills = [
  {
    name: 'Athletics',
    profBonus: 0,
    ability: 'str',
    misc: 0,
  },
  {
    name: 'Acrobatics',
    profBonus: 0,
    ability: 'dex',
    misc: 10,
  },
  {
    name: 'Sleight of Hand',
    profBonus: 0,
    ability: 'dex',
    misc: 0,
  },
  {
    name: 'Stealth',
    profBonus: 0,
    ability: 'dex',
    misc: 0,
  },
  {
    name: 'Arcana',
    profBonus: 0,
    ability: 'int',
    misc: 0,
  },
  {
    name: 'History',
    profBonus: 0,
    ability: 'int',
    misc: 0,
  },
  {
    name: 'Investigation',
    profBonus: 0,
    ability: 'int',
    misc: 0,
  },
  {
    name: 'Nature',
    profBonus: 0,
    ability: 'int',
    misc: 0,
  },
  {
    name: 'Religion',
    profBonus: 0,
    ability: 'int',
    misc: 0,
  },
  {
    name: 'Animal Handling',
    profBonus: 0,
    ability: 'wis',
    misc: 0,
  },
  {
    name: 'Insight',
    profBonus: 0,
    ability: 'wis',
    misc: 0,
  },
  {
    name: 'Medicine',
    profBonus: 0,
    ability: 'wis',
    misc: 0,
  },
  {
    name: 'Perception',
    profBonus: 0,
    ability: 'wis',
    misc: 0,
  },
  {
    name: 'Survival',
    profBonus: 0,
    ability: 'wis',
    misc: 0,
  },
  {
    name: 'Deception',
    profBonus: 0,
    ability: 'cha',
    misc: 0,
  },
  {
    name: 'Intimidation',
    profBonus: 0,
    ability: 'cha',
    misc: 0,
  },
  {
    name: 'Performance',
    profBonus: 0,
    ability: 'cha',
    misc: 0,
  },
  {
    name: 'Persuasion',
    profBonus: 0,
    ability: 'cha',
    misc: 0,
  },
]

const dispatchers = {
  [SET_SKILLS]: (state, { skills }) => skills,
  [SET_SINGLE_SKILL]: (state, { skill }) =>
    state.map(currentSkill => {
      if (currentSkill.name !== skill.name) return currentSkill
      return skill
    }),
}

export const skillsReducer = (state = defaultStateSkills, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
