const mongodb = require('mongodb');
const MongodbClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback =>{
    MongodbClient.connect('mongodb://localhost:27017/test?readPreference=primary&appname=MongoDB%20Compass&ssl=false')
    .then((client)=>{
        console.log('Connected!');
        callback(client);
        _db = client.db();
    })
    .catch(err=> console.log(err));
}

const getDB = ()=>{
    if(_db){
        return _db;
    }
    throw "No Database Found!";
}

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
