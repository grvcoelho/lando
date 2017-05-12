import test from 'ava'
import isObject from '../../lib/internals/is-object'

test('returns true for arguments ', t => {
  t.true(isObject(arguments))
})

test('returns true for array ', t => {
  t.true(isObject([1, 2, 3]))
})

test('returns true for Date ', t => {
  t.true(isObject(new Date()))
})

test('returns true for Error ', t => {
  t.true(isObject(new Error()))
})

test('returns true for object ', t => {
  t.true(isObject({ a: '42' }))
})

test('returns true for RegEx ', t => {
  t.true(isObject(/lando/))
})

test('returns false for Symbol ', t => {
  t.false(isObject(Symbol('a')))
})

test('returns false for boolean ', t => {
  t.false(isObject(true))
})

test('returns false for string ', t => {
  t.false(isObject('lando'))
})

test('returns false for number ', t => {
  t.false(isObject(42))
})
