// add the express module to our application
const express = require('express');
// assign the express application to the app constant
const app = express();
// assign port constant with port 8000
const port = 8000;


// set up the application to listen at port 8000
app.listen(port, function(err){
    if(err){
        console.log(`error in running the server: ${err}`);
    }

    console.log(`Server is running on Port: ${port}`);
});


