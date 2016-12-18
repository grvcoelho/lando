import test from 'ava'
import isInteger from '../../lib/internals/is-integer'

test('returns true for an integer positive number', t => {
  t.true(isInteger(42))
})

test('returns true for an integer positive number', t => {
  t.true(isInteger(-42))
})

test('returns flase for floating-point numbers', t => {
  t.false(isInteger(42.5))
})

test('returns false for loating-point numbers', t => {
  t.false(isInteger(42.5))
})

test('returns false for NaN', t => {
  t.false(isInteger(NaN))
})

test('returns false for Infinity', t => {
  t.false(isInteger(Infinity))
})

test('returns false for arguments ', t => {
  t.false(isInteger(arguments))
})

test('returns false for array ', t => {
  t.false(isInteger([1, 2, 3]))
})

test('returns false for boolean ', t => {
  t.false(isInteger(true))
})

test('returns false for Date ', t => {
  t.false(isInteger(new Date()))
})

test('returns false for Error ', t => {
  t.false(isInteger(new Error()))
})

test('returns false for function ', t => {
  t.false(isInteger(x => x + 1))
})

test('returns false for object ', t => {
  t.false(isInteger({ a: '42' }))
})

test('returns false for RegEx ', t => {
  t.false(isInteger(/lando/))
})

test('returns false for string ', t => {
  t.false(isInteger('lando'))
})

test('returns false for Symbol ', t => {
  t.false(isInteger(Symbol('a')))
})

