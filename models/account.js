import {DataTypes} from 'sequelize';
import { sequelizeInstance } from '../config/emailConfig.js';
const Account = sequelizeInstance.define('Account', {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  Name: {
    type: DataTypes.STRING(50)
  },
  balance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  timestamps: false
}, {
  tableName: 'accounts',
});

async function syncModels() {
  try {
    // Open the connection
    await sequelizeInstance.authenticate();
    console.log('Connection has been established successfully.');
    // Sync models
    await sequelizeInstance.sync();
    console.log('Models synchronized with the database.');
  } catch (error) {
    console.error('Error syncing models with the database:', error);
  }
}

export {Account,syncModels}