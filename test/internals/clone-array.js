import test from 'ava'
import cloneArray from '../../lib/internals/clone-array'

test('clones an array', t => {
  const original = [1, 2, 3]
  const cloned = cloneArray(original)

  cloned[1] = 7

  t.notDeepEqual(original, cloned)
})

