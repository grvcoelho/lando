const isObject = x => (typeof x === 'object') || (Object.prototype.toString.call(x) === '[object Object]')

export default isObject
