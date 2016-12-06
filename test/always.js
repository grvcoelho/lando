import test from 'ava'
import always from '../lib/always'

test('returns always the same value passed as argument', t => {
  const fn = always(10)

  t.is(fn(), 10)
})

