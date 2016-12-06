import test from 'ava'
import T from '../lib/T'

test('always returns true', t => {
  t.true(T())
  t.true(T(10))
  t.true(T(false))
})

