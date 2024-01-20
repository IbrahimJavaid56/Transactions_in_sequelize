import { Sequelize } from 'sequelize';

const sequelizeInstance = new Sequelize('TransactionDB', 'root', '', {
  dialect: 'mysql',
  logging: false,
});


export {sequelizeInstance};