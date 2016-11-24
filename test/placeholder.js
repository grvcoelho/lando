import test from 'ava'
import __ from '../lib/placeholder'

test('is placeholder', t => {
  t.true(__['@@functional/placeholder'])
})

