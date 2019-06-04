export const modifier = score => Math.floor((score - 10) / 2)
export const modifierStr = score => {
  const mod = modifier(score)
  return mod > 0 ? '+' + mod : mod
}
