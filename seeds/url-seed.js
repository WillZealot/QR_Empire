const { QRLink } = require('../models');

const urlSeed = [{
}
  ];
  
  const seedURL = () => QRLink.bulkCreate(urlSeed, {individualHooks: true});
  module.exports = seedURL;
  