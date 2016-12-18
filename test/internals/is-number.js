import test from 'ava'
import isNumber from '../../lib/internals/is-number'

test('returns true for a primitive number', t => {
  t.true(isNumber(42))
})

test('returns true for Object-constructed numbers ', t => {
  t.true(isNumber(Object(42)))
})

test('returns true for NaN ', t => {
  t.true(isNumber(NaN))
})

test('returns false for arguments ', t => {
  t.false(isNumber(arguments))
})

test('returns false for array ', t => {
  t.false(isNumber([1, 2, 3]))
})

test('returns false for boolean ', t => {
  t.false(isNumber(true))
})

test('returns false for Date ', t => {
  t.false(isNumber(new Date()))
})

test('returns false for Error ', t => {
  t.false(isNumber(new Error()))
})

test('returns false for function ', t => {
  t.false(isNumber(x => x + 1))
})

test('returns false for object ', t => {
  t.false(isNumber({ a: '42' }))
})

test('returns false for RegEx ', t => {
  t.false(isNumber(/lando/))
})

test('returns false for string ', t => {
  t.false(isNumber('lando'))
})

test('returns false for Symbol ', t => {
  t.false(isNumber(Symbol('a')))
})
