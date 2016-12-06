import test from 'ava'
import __ from '../lib/placeholder'
import curry from '../lib/curry'

const operation = curry((a, b, c) => a + b - c)

test('invokes the function when all argument is passed', t => {
  const result = operation(10, 20, 5)

  t.is(result, 25)
})

test('returns a function when no argument is passed', t => {
  const result = operation()(20)()(10)()(5)

  t.is(result, 25)
})

test('returns a function when some arguments are passed', t => {
  const f1 = operation(10, 20)
  const result = f1(5)

  t.is(result, 25)
})

test('returns a function when some arguments are placeholder', t => {
  const f1 = operation(10, __, 5)
  const result = f1(20)

  t.is(result, 25)
})

