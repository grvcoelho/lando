import test from 'ava'
import identity from '../../lib/internals/identity'

test('returns identity', t => {
  const x = identity(42)

  t.is(x, 42)
})

