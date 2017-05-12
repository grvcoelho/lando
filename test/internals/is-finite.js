import test from 'ava'
import isFinite from '../../lib/internals/is-finite'

test('returns true for an finite integer number', t => {
  t.true(isFinite(42))
})

test('returns true for an finite non-integer number', t => {
  t.true(isFinite(42.5))
})

test('returns true for a zero number', t => {
  t.true(isFinite(0))
})

test('returns true for an negative finite integer number', t => {
  t.true(isFinite(-42))
})

test('returns false for positive NaN', t => {
  t.false(isFinite(NaN))
})

test('returns false for positive Infinity', t => {
  t.false(isFinite(Infinity))
})

test('returns false for negative Infinity', t => {
  t.false(isFinite(-Infinity))
})

test('returns false for arguments ', t => {
  t.false(isFinite(arguments))
})

test('returns false for array ', t => {
  t.false(isFinite([1, 2, 3]))
})

test('returns false for boolean ', t => {
  t.false(isFinite(true))
})

test('returns false for Date ', t => {
  t.false(isFinite(new Date()))
})

test('returns false for Error ', t => {
  t.false(isFinite(new Error()))
})

test('returns false for function ', t => {
  t.false(isFinite(x => x + 1))
})

test('returns false for object ', t => {
  t.false(isFinite({ a: '42' }))
})

test('returns false for RegEx ', t => {
  t.false(isFinite(/lando/))
})

test('returns false for string ', t => {
  t.false(isFinite('lando'))
})


test('returns false for Symbol ', t => {
  t.false(isFinite(Symbol('a')))
})

