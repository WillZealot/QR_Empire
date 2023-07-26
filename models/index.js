const User = require('./user');
const QRLink = require('./qrlink');

User.hasMany(QRLink, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

QRLink.belongsTo(User, {
  foreignKey: 'user_id'
});

module.exports = { User, QRLink };