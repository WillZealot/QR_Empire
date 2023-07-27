const seedUsers = require('./user-seed')
const seedURL = require('./url-seed')

const sequelize = require('../config/connection')

const seedAll = async () => {
  await sequelize.sync({ force: true })
  await seedUsers()
  await seedURL()
  process.exit(0)
}

seedAll()
