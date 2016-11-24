import test from 'ava'
import __, { isPlaceholder } from '../lib/placeholder'

test('is placeholder', t => {
  t.true(isPlaceholder(__))
})

