// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    // const db = client.db('TodoApp');
    // db.collection('Todos').find({
    //     //completed: false
    //     _id: new ObjectID('5ad6fea2ba5e873edb2319cf')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to Fatch Todos', err);
    // });

    // // Users
    // const db_users = client.db('Users');
    // db_users.collection('Users').find().toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to Fatch Users', err);
    // });

    // const db = client.db('TodoApp');
    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos Count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to Fatch Todos', err);
    // });

    // Users Collection
    const db = client.db('Users');
    db.collection('Users').find({
        name: 'Arnab'
    }).count().then((count) => {
        console.log(`Todos Count: ${count}`);
    }, (err) => {
        console.log('Unable to Fatch Todos', err);
    });
    // client.close();
});