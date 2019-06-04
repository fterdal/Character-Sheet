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
// Expects skill to look like { Athletics: { profBonus: 1, misc: 3 } }
export const setSingleSkill = skill => ({ type: SET_SINGLE_SKILL, skill })

// In most cases, the proficiency bonus does not apply to a skill.
// In some cases, it applies 1/2 or 2x. So the profBonus is how much
// to multiply the proficiency bonus by.
export const defaultStateSkills = {
  str: {
    Athletics: {
      profBonus: 0,
      misc: 0,
    },
  },
  dex: {
    Acrobatics: {
      profBonus: 0,
      misc: 0,
    },
    'Sleight of Hand': {
      profBonus: 0,
      misc: 0,
    },
    Stealth: {
      profBonus: 0,
      misc: 0,
    },
  },
  int: {
    Arcana: {
      profBonus: 0,
      misc: 0,
    },
    History: {
      profBonus: 0,
      misc: 0,
    },
    Investigation: {
      profBonus: 0,
      misc: 0,
    },
    Nature: {
      profBonus: 0,
      misc: 0,
    },
    Religion: {
      profBonus: 0,
      misc: 0,
    },
  },
  wis: {
    'Animal Handling': {
      profBonus: 0,
      misc: 0,
    },
    Insight: {
      profBonus: 0,
      misc: 0,
    },
    Medicine: {
      profBonus: 0,
      misc: 0,
    },
    Perception: {
      profBonus: 0,
      misc: 0,
    },
    Survival: {
      profBonus: 0,
      misc: 0,
    },
  },
  cha: {
    Deception: {
      profBonus: 0,
      misc: 0,
    },
    Intimidation: {
      profBonus: 0,
      misc: 0,
    },
    Performance: {
      profBonus: 0,
      misc: 0,
    },
    Persuasion: {
      profBonus: 0,
      misc: 0,
    },
  },
}

const skillNameIndex = {
  // Strength
  Athletics: 'str',
  // Dexterity
  Acrobatics: 'dex',
  'Sleight of Hand': 'dex',
  Stealth: 'dex',
  // Intelligence
  Arcana: 'int',
  History: 'int',
  Investigation: 'int',
  Nature: 'int',
  Religion: 'int',
  // Wisdom
  'Animal Handling': 'wis',
  Insight: 'wis',
  Medicine: 'wis',
  Perception: 'wis',
  Survival: 'wis',
  // Charisma
  Deception: 'cha',
  Intimidation: 'cha',
  Performance: 'cha',
  Persuasion: 'cha',
}

const dispatchers = {
  [SET_SKILLS]: (state, { skills }) => skills,
  [SET_SINGLE_SKILL]: (state, { skill }) => {
    const [skillName] = Object.keys(skill)
    const skillAbility = skillNameIndex[skillName]
    return {
      ...state,
      [skillAbility]: {
        ...state[skillAbility],
        ...skill,
      },
    }
  },
}

export const skillsReducer = (state = defaultStateSkills, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
