export function mask(value: string | number, pattern: string): string {
  let i = 0
  const stringify = value.toString()

  return pattern.replace(/#/g, () => stringify[i++] || '')
}
