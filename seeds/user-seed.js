const { User } = require('../models')

const userData = [{
  name: 'Tyler',
  email: 'tyler@example.com',
  password: 'wheiothwaoi'
},
{
  name: 'Bao',
  email: 'bao@example.com',
  password: 'zerstorer'
},
{
  name: 'william',
  email: 'william@example.com',
  password: 'hjgudufo'
}
]

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true })

module.exports = seedUsers
