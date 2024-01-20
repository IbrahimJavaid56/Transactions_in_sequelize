import {syncModels} from './models/account.js'
import {Account} from './models/account.js'
import {sequelizeInstance} from './config/emailConfig.js';

// Call to establish the connection and sync models
await syncModels();

///Unmanaged Transactions......

const performTransactionUnmanaged = async () => {
  // Start a managed transaction
  const t = await sequelizeInstance.transaction();

  try {
    const bart = await Account.findOne({ where: { Name: 'Bart' }, transaction: t });
    const lisa = await Account.findOne({ where: { Name: 'Lisa' }, transaction: t });

    // Check if both users are found
    if (!bart || !lisa) {
      throw new Error('Users not found');
    }

    // Performing the balance updation.
    await bart.update({ balance: bart.balance + 10 }, { transaction: t });
    await lisa.update({ balance: lisa.balance - 10 }, { transaction: t });

    // Commit the transaction
   
    await t.commit();
    
    console.log('Transaction completed successfully');
  
  } catch (error) {
    // If an error occurs, rollback the transaction
    await t.rollback();
    console.error('Transaction failed:', error);
  }
};

performTransactionUnmanaged()

///Managed Transactions......

async function performTransactionManaged(){
  try {
    const result = await sequelizeInstance.transaction(async (t) => {
      const Alpha = await Account.findOne({ where: { Name: 'Alpha' }});
      const Bravo = await Account.findOne({ where: { Name: 'Bravo' }});
  
      // Check if both users are found
      if (!Alpha || !Bravo) {
        throw new Error('Users not found');
      }
  
      // Performing the balance updation.
      await Alpha.update({ balance: Alpha.balance + 50 });
      await Bravo.update({ balance: Bravo.balance - 50 });
  
      console.log('Transaction completed successfully');
  
      // Return some data if needed
      return { message: 'Transaction completed successfully' };
    });
  } catch (error) {
    // If an error occurs, it will be caught here
    console.error('Transaction failed:', error);
  }
}

function foo(){
  console.log('foo');
}
// performTransactionManaged();
