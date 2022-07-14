const test = require('node:test')
const rewire = require('rewire')
const { deepStrictEqual } = require('assert')

const userFactoryModule = rewire('../src/factory/userFactory.js')

class Mock {
  connect = () => this
  find = () => [{ name: 'Test' }]
}

userFactoryModule.__set__('Database', Mock)

test('User Factory test suite', () => {
  test('should return the name in uppercase', async () => {
    const userService = await userFactoryModule.UserFactory.createInstance()

    const result = await userService.find()

    deepStrictEqual(result, [{ name: 'TEST' }])
  })
})
