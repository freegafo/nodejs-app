module.exports.getAllUsers = function(callback) {
  return db.collection('users').find({}).toArray(callback);
}