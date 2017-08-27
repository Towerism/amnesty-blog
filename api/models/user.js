import bcrypt from 'bcrypt'

export default (sequelize, DataTypes) => {
  var User = sequelize.define('User', {
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING
  })
  User.associate = function (models) {
    // associations can be defined here
  }
  User.prototype.validatePassword = function (password) {
    return bcrypt.compare(password, this.password).then(result => {
      return result
    })
  }
  return User
}
