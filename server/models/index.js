const User = require('./User');
const Recipe = require('./Recipe');
const Friend = require('./Friend');

Recipe.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Recipe, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

User.hasMany(Friend, {
  foreignKey: 'user_id'
});

Friend.belongsToMany(User, {
  through: {
    model: User
  } 
});

module.exports = { User, Recipe, Friend }