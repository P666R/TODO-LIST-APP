// import mongoose
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/task_list_db');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database: MongoDB');
});

module.exports = db;