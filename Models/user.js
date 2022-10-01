// 1st Method of creating a Model using class 

const { DataTypes, Model } = require('sequelize');
const sequelize = require("./index");

class User extends Model {}

User.init({
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  sequelize, // We need to pass the connection instance
  modelName: 'User' // We need to choose the model name
});

// the defined model is the class itself
console.log(User === sequelize.models.User); // true
module.exports = User

// 2nd Method of creating a Model using sequelize.define 

// const { DataTypes } = require("sequelize");
// const sequelize = require("./index");

// const User = sequelize.define(
//   "User",
//   {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults   to true
//     },
//   },
//   {
//     // Other model options go here
//     // sequelize, // We need to pass the connection instance - Already Used
//     // modelName: "User" // We need to choose the model name - Already Used
//     tableName: "users",
//     timestamps: false // Using this createdAt and updatedAt will not be added / it is true by default
//   }
// );

// // `sequelize.define` also returns the model
// console.log(User === sequelize.models.User); // true
// module.exports = User