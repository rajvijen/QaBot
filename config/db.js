//const mongoose = require('mongoose');
//const dev = require('./dev');

//mongoose.connect(dev.dbURI);

//const db = mongoose.connection;
//db.on('error', console.error.bind(console, 'connection error'));

//db.once('open', () => {
//	console.log('connection estabilished...');
//});

//exports.db = db;
//

const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://rajvijen:@Mongodb12345@qabot-cluster-vzut8.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  
    
  client.close();
});

exports.client = client;
