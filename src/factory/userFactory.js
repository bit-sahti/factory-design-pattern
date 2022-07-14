const { UserRepository } = require('../repository/userRepository')
const { UserService } = require('../service/userService')
const { Database } = require('../util/database')

class UserFactory {
  static async createInstance() {
    const database = new Database({ connectionString: 'MongoDB_URI' })

    const dbConnection = await database.connect()

    const userRepository = new UserRepository({ dbConnection })

    const userService = new UserService({ userRepository })

    return userService
  }
}

module.exports = { UserFactory }
