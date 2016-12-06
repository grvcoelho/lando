import { isPlaceholder } from './placeholder'
import cloneArray from './internals/clone-array'

const merge = (received, args) => {
  const dest = cloneArray(received)
  const origin = cloneArray(args)

  const combined = dest.map(elem => {
    if (isPlaceholder(elem) && origin[0]) {
      return origin.shift()
    }

    return elem
  })

  return combined.concat(origin)
}

const actualLength = arr =>
  arr.reduce((length, elem) => isPlaceholder(elem) ? length : length + 1, 0)

const curry = (fn, arity = fn.length, received = []) => (...args) => {
  const combined = merge(received, args)

  if (actualLength(args) >= arity) {
    return fn(...combined)
  }

  return curry(fn, arity - actualLength(args), combined)
}

export default curry

