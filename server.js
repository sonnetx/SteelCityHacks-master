const express = require('express');

/* Start up an instance of app */
const app = express();

/* Dependencies */

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.

// Cors for cross origin allowance


/* Initialize the main project folder*/
app.use(express.static('static'));


app.listen(process.env.PORT || 5500, (req, res )=> {

    console.log("Server's Running");
})




