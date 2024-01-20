import { Sequelize } from 'sequelize';

const sequelizeInstance = new Sequelize('TransactionDB', 'root', '', {
  dialect: 'mysql',
  logging: false,
});


function bar(){
  console.log('bar');
}

export {sequelizeInstance};