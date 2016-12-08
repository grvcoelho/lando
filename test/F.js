import test from 'ava'
import F from '../lib/F'

test('always returns false', t => {
  t.false(F())
  t.false(F(10))
  t.false(F(true))
})

