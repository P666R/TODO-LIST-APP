// add the express module to our application
const express = require('express');

// assign the express application to the app constant
const app = express();

// assign port constant with port 8000
const port = 8000;

const db = require('./config/mongoose');

// create a route to redirect on every request to routes directory
app.use('/', require('./routes'));

// view engine as ejs 
app.set('view engine', 'ejs');

// set path for views
app.set('views', './views');



// set up the application to listen at port 8000
app.listen(port, function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }

    console.log(`Server is running on Port: ${port}`);
});


