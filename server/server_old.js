var {mongoose} = require('./db/mongoose');
// Todo Model
// var Todo = mongoose.model('Todo', {
//     text: {
//         type: String,
//         required: true,
//         minlength: 1,
//         trim: true
//     },
//     completed: {
//         type: Boolean,
//         default: false
//     },
//     completedAt: {
//         type: Number,
//         default: null
//     }
// });

// User model
var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        requierd: true
    }
});
// var newTodo = new Todo({
//     text: 'Cook dinner'
// });

// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);
    
// }, (e) => {
//     console.log('Unable to save Todo');
    
// });
// Todo data save
// var newTodo = new Todo({
//     text: 'Again Edit this video',
//     completed: false,
//     completedAt: new Date()
// });

// newTodo.save().then((doc) => {
//     console.log('Saved Todo', doc);

// }, (e) => {
//     console.log('Unable to save Todo');

// });

// User data save
var newUser = new User({
    email: 'imarnab123@gmail.com',
    name: 'Arnab Chakraborty'
});

newUser.save().then((doc) => {
    console.log('User Created', doc);

}, (e) => {
    console.log('Unable to create User');

});