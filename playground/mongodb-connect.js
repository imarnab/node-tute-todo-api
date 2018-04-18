// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
var obj = new ObjectID;
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    // const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, reasult) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(reasult.ops, undefined, 2));
    // });

    // const db = client.db('Users');

    // db.collection('Users').insertOne({
    //     name: 'Arnab',
    //     age: '27',
    //     location: 'Kolkata'
    // }, (err, reasult) => {
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }
    //     console.log(reasult.ops[0]._id.getTimestamp());
    // });
    client.close();
});