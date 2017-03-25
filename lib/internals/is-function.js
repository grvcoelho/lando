const typeofIsFunction = x => (typeof x === 'function')
const toStringIsFunction = x => (Object.prototype.toString.call(x) === '[object Function]')
const toStringIsGenerator = x => (Object.prototype.toString.call(x) === '[object GeneratorFunction]')

const isFunction = x => typeofIsFunction(x) || toStringIsFunction(x) || toStringIsGenerator(x)

export default isFunction
