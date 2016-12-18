import _isNaN from './is-nan'
import _isNumber from './is-number'

const _isFinite = x => !(!_isNumber(x) || _isNaN(x) || x === Infinity || x === -Infinity)

export default _isFinite
