const { UserFactory } = require('./factory/userFactory')

;(async () => {
  const userService = await UserFactory.createInstance()

  const user = await userService.find({ name: 'Thaís' })

  console.log(user)
})()
