const __ = Symbol('@@lando/placeholder')

export const isPlaceholder = x =>
  typeof x === 'symbol'
  && x === __

export default __

