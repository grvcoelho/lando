import test from 'ava'
import curry1 from '../../lib/internals/curry1'

const double = curry1(a => a * 2)

test('invokes the function when argument is passed', t => {
  const result = double(20)

  t.is(result, 40)
})

test('returns a curried function when no argument is passed', t => {
  const f1 = double()
  const result = f1(20)

  t.is(result, 40)
})

test('returns a curried function when a placeholder is passed as argument', t => {
  const f1 = double()
  const result = f1(20)

  t.is(result, 40)
})
