const { User } = require('../models')

const userData = [{
  name: 'Tyler',
  email: 'tyler@example.com',
  password: 'wheiothwaoi'
},
{
  name: 'Bao',
  email: 'bao@gmail.com',
  password: 'password123'
},
{
  name: 'william',
  email: 'william@example.com',
  password: 'hjgudufo'
}
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true })

module.exports = seedUsers
