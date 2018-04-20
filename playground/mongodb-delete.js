// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongodb server');
    }
    console.log('Connected to mongodb server');
    //const db = client.db('TodoApp');
    const db = client.db('Users');

    // Delete Many
    // db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((reasult) => {
    //     console.log(reasult);
        
    // });
    // Delete One
    // db.collection('Todos').deleteOne({ text: 'Eat Dinner' }).then((reasult) => {
    //     console.log(reasult);
    // });   
    // Find One and Delete
    // db.collection('Todos').findOneAndDelete({ completed: true }).then((reasult) => {
    //     console.log(reasult);
    // });

    // Challange Part
    //Delete Many
    // db.collection('Users').deleteMany({name: 'Ayan'}).then((reasult) => {
    //     console.log(reasult);
    // });
    // Find One and Delete
    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5ad7137ec08d8b445c99bd57') }).then((reasult) => {
        console.log(reasult);
    });
    // client.close();
});