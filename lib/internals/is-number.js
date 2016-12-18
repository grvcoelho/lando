const isNumber = x => (typeof x === 'number') || (Object.prototype.toString.call(x) === '[object Number]')

export default isNumber
