Write a Node.js program to create DB and Collections in MongoDB.
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mymongodb1";
MongoClient.connect(url, function(err, db) {
if (err) throw err;
console.log("Database created!");
db.close();
});
MongoClient.connect(url, function(err, db) {
if (err) throw err;
var dbo = db.db("mymongodb1");
dbo.createCollection("student", function(err, res) {
if (err) throw err;
console.log("Collection created!");
db.close();
});
});
