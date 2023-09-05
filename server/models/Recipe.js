const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Recipe extends Model { }

Recipe.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    dishName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    cuisineType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dishType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    mealType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: 'user',
          key: 'id',
      }
  },
  },
  {
     sequelize,
     timestamps: true,
     freezeTableName: true,
     underscored: true,
     modelName: 'recipe',
  }
);

module.exports = Recipe;