const Sequelize = require('sequelize');
const sequelize = require('../instances/mysql');

const Colors = sequelize.define('colors', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  colorHexadecimal: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.STRING
  }
}
  , {
    ondelete: 'CASCADE',
    onUpdate: 'CASCADE',
    timestamps: true,
  }
);


module.exports = Colors;