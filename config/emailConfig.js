import { Sequelize } from 'sequelize';

const sequelizeInstance = new Sequelize('TransactionDB', 'root', '', {
  dialect: 'mysql',
  logging: false,
});
console.log('InsideEmailConfigFile');
export {sequelizeInstance};