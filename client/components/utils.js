export const abilityModifier = score => Math.floor((score - 10) / 2)
export const abilityModifierString = score => {
  const mod = abilityModifier(score)
  return mod > 0 ? '+' + mod : '' + mod
}
export const modifierString = score => {
  return score > 0 ? '+' + score : '' + score
}

export const abilityName = ability => (
  {
    str: 'Strength',
    dex: 'Dexterity',
    con: 'Constitution',
    int: 'Intelligence',
    wis: 'Wisdom',
    cha: 'Charisma',
  }[ability]
)
