import TransactionSchema from "./Transaction.schema.js";
//create a new user in the table
export const createTransaction = (newTransactionObj) => {
  return TransactionSchema(newTransactionObj).save();
};

//find a user, @usrObj should have email and password
export const findTransactions = (filter) => {
  return TransactionSchema.findOne(filter);
  
};
//find all transction,@filte should be an object
export const findTransaction = (filter) => {
  return TransactionSchema.find(filter)
};
//delete trasctions
export const deleteTransaction =(ids,userId)=>
{
  return TransactionSchema.deleteMany({_id:{$in:ids},userId})
}