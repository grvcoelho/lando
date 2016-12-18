const _typeofIsFunction = x => (typeof x === 'function')
const _toStringIsFunction = x => (Object.prototype.toString.call(x) === '[object Function]')
const _toStringIsGenerator = x => (Object.prototype.toString.call(x) === '[object GeneratorFunction]')

const isFunction = x => _typeofIsFunction(x) || _toStringIsFunction(x) || _toStringIsGenerator(x)

export default isFunction
