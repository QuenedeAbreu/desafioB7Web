const Sequelize = require('sequelize');
const sequelize = require('../instances/mysql');
const Colors = require('./colors');

const Notes = sequelize.define('notes', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false
  },
  content: {
    type: Sequelize.STRING,
    allowNull: false
  },
  id_color: {
    type: Sequelize.INTEGER,
    foreignKey: true,
    allowNull: false,
  },
}
  , {
    timestamps: true,

  }
);

Notes.belongsTo(Colors,
  {
    foreignKey: 'id_color',
    targetKey: 'id',
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
  }
);
Colors.hasMany(Notes, { foreignKey: 'id_color', sourceKey: 'id' });

module.exports = Notes;