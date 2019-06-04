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
// Expects skill to look like { skillName: 'Athletics', profBonus: 1, misc: 3 }
export const setSingleSkill = skill => ({ type: SET_SINGLE_SKILL, skill })

// In most cases, the proficiency bonus does not apply to a skill.
// In some cases, it applies 1/2 or 2x. So the profBonus is how much
// to multiply the proficiency bonus by.
export const defaultStateSkills = {
  str: [
    {
      skillName: 'Athletics',
      profBonus: 0,
      misc: 0,
    },
  ],
  dex: [
    {
      skillName: 'Acrobatics',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Sleight of Hand',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Stealth',
      profBonus: 0,
      misc: 0,
    },
  ],
  int: [
    {
      skillName: 'Arcana',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'History',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Investigation',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Nature',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Religion',
      profBonus: 0,
      misc: 0,
    },
  ],
  wis: [
    {
      skillName: 'Animal Handling',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Insight',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Medicine',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Perception',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Survival',
      profBonus: 0,
      misc: 0,
    },
  ],
  cha: [
    {
      skillName: 'Deception',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Intimidation',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Performance',
      profBonus: 0,
      misc: 0,
    },
    {
      skillName: 'Persuasion',
      profBonus: 0,
      misc: 0,
    },
  ],
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
    const { skillName } = skill
    const skillAbility = skillNameIndex[skillName]
    return {
      ...state,
      [skillAbility]: state[skillAbility].map(currentSkill => {
        if (currentSkill.skillName !== skillName) return currentSkill
        return skill
      })
    }
  },
}

export const skillsReducer = (state = defaultStateSkills, action) => {
  if (action.type in dispatchers) {
    return dispatchers[action.type](state, action)
  }
  return state
}
