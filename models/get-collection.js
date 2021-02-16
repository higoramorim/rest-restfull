const { MongoClient } = require('mongodb');

let connection = null;

const DB_NAME = 'wellRested'

const DB_URI = `mongodb://localhost:27017/${DB_NAME}`;

const getCollection = async (collectionName) => {
  connection = connection || await MongoClient.connect(DB_URI)

  return connection.db(DB_NAME).collection(collectionName)
};

module.exports = getCollection;