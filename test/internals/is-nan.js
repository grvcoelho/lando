import test from 'ava'
import isNaN from '../../lib/internals/is-nan'

test('returns true for a NaN', t => {
  t.true(isNaN(NaN))
})

test('returns false for arguments ', t => {
  t.false(isNaN(arguments))
})

test('returns false for array ', t => {
  t.false(isNaN([1, 2, 3]))
})

test('returns false for boolean ', t => {
  t.false(isNaN(true))
})

test('returns false for Date ', t => {
  t.false(isNaN(new Date()))
})

test('returns false for Error ', t => {
  t.false(isNaN(new Error()))
})

test('returns false for function ', t => {
  t.false(isNaN(x => x + 1))
})

test('returns false for object ', t => {
  t.false(isNaN({ a: '42' }))
})

test('returns false for RegEx ', t => {
  t.false(isNaN(/lando/))
})

test('returns false for string ', t => {
  t.false(isNaN('lando'))
})

test('returns false for Symbol ', t => {
  t.false(isNaN(Symbol('a')))
})

