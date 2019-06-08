const db = require('../../dbConfig.js');

module.exports = {
  getAccounts,
  getAccountByEmail,
  getAccountById,
  updateAccount,
  deleteAccount

}

const getAccounts = () => {
  return db('accounts');
}

const getAccountById = id => {
  return db("accounts")
    .where("id", id) //* returns Account within array
    .first();
},

const getAccountByEmail =  email => {
  return db("accounts")
    .returning("*")
    .where("email", email) //* returns Account within array
    .first();
},

const updateAccount = (id, account) => {
  return db("accounts")
    .update(account)
    .where("id", id) //* returns count of updated
    .then(c => {
      return this.getaccountById(id);
    });
},

const deleteAccount = id => {
  return db("accounts")
    .where("id", id)
    .del(); //* returns count of deleted
}