import { Sequelize } from 'sequelize';

const sequelizeInstance = new Sequelize('TransactionDB', 'root', '', {
  dialect: 'mysql',
  logging: false,
});

function addedFeatureA(){
  console.log('inside feature A function');
}

export {sequelizeInstance};