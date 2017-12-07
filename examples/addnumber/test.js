const add = require('./index')

test('Add function exists', () => {
  expect(add).toBeDefined()
})

test('Add add two number', () => {
  expect(add(1, 2)).toEqual(3)
})

test('Add add two number', () => {
  expect(add(7, 2)).toEqual(9)
})

test('Add add two number', () => {
  expect(add(7, 6)).toEqual(13)
})