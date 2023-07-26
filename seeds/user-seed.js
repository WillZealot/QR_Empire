const { User } = require('../models');

const userData = [{
        username: 'Tyler',
        email: 'tyler@example.com',
        password: 'wheiothwaoi'
    },
    {
        username: 'Bao',
        email: 'bao@example.com',
        password: 'zerstorer'
    },
    {
        username: 'william',
        email: 'william@example.com',
        password: 'hjgudufo'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;