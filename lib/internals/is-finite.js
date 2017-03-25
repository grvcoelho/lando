import _isNaN from './is-nan'
import isNumber from './is-number'

const _isFinite = x => !(!isNumber(x) || _isNaN(x) || x === Infinity || x === -Infinity)

export default _isFinite
