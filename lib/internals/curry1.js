import { isPlaceholder } from '../placeholder'

const curry1 = fn => (...args) => {
  if (args.length === 0 || isPlaceholder(args[0])) {
    return curry1(fn)
  }

  return fn(...args)
}

export default curry1

