const updateClassNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(' ')
}

export {
  updateClassNames
}