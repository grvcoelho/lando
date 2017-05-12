import isFinite from './is-finite'
import isNumber from './is-number'

const isInteger = x => isNumber(x) && isFinite(x) && Math.floor(x) === x

export default isInteger
