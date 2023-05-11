const User = require('./User');
const Recipe = require('./Recipe');
const Friends = require('./Friends');

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.belongsToMany(User, {
  through: 'Friends',
  as: 'friend'
});

module.exports = { User, Recipe, Friends }