const User = require('./User');
const Recipe = require('./Recipe');
const Friend = require('./Friend');

Recipe.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Recipe);

User.hasMany(Friend, {
  foreignKey: 'user_id'
});

Friend.belongsToMany(User, {
  foreignKey: 'user_id'
});

module.exports = { User, Recipe, Friend }