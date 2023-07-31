const { QRLink } = require('../models');

const urlSeed = [{
   description:'https://www.google.com/',
   user_id: 1,
},
{
   description:'https://www.bing.com/',
   user_id: 2,
},
{
   description:'https://www.yahoo.com/',
   user_id: 3
},
{
   description:'https://www.apple.com/',
   user_id: 3
}
  ];
  
  const seedURL = () => QRLink.bulkCreate(urlSeed, {individualHooks: true});
  module.exports = seedURL;
  