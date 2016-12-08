import curry from './curry'

const always = val => () => val

export default curry(always)

