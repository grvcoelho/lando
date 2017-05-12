import test from 'ava'
import isFunction from '../../lib/internals/is-function'

test('returns true for a named function', t => {
  const noop = function noop () {}

  t.true(isFunction(noop))
})

test('returns true for an arrow function', t => {
  const sum = (x, y) => x + y

  t.true(isFunction(sum))
})

test('returns true for a generator function', t => {
  const gen = function* gen () {
    yield 42
  }

  t.true(isFunction(gen))
})

test('returns false for arguments ', t => {
  t.false(isFunction(arguments))
})

test('returns false for array ', t => {
  t.false(isFunction([1, 2, 3]))
})

test('returns false for boolean ', t => {
  t.false(isFunction(true))
})

test('returns false for Date ', t => {
  t.false(isFunction(new Date()))
})

test('returns false for Error ', t => {
  t.false(isFunction(new Error()))
})

test('returns false for object ', t => {
  t.false(isFunction({ a: '42' }))
})

test('returns false for RegEx ', t => {
  t.false(isFunction(/lando/))
})

test('returns false for string ', t => {
  t.false(isFunction('lando'))
})

test('returns false for Symbol ', t => {
  t.false(isFunction(Symbol('a')))
})
