'use strict';
const {
  Model
} = require('sequelize');
const { hashPassword } = require('../helpers/bcrypt');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull: false,
      unique: true,
      isEmail: true,
      validate: {
        notNull: {
          msg: "email must be required"
        },
        notEmpty: {
          msg: "email must be required"
        }
      }

    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        notEmpty: {
          msg: "username of user is required",
        },
        notNull: {
          msg: "username of user is required",
        },
      },
    },
    password: {
      type : DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: "password must be required"
        },
        notEmpty: {
          msg: "password must be required"
        },
        len: {
          args: [5],
          msg: `Password length must be between 5`,
        },
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  User.beforeCreate((user)=>{
    user.password = hashPassword(user.password)
  })
  return User;
};