// loading an express lib
const express = require('express');
const app = express();


// require data from the server ----GET
app.get('/hello', (
    request,
    response) => {

    console.log('Hello World!!!')
    response.json({message: 'Hello World from Node Sever'})

});

app.listen(5000);

// send data ---- POST

// delete date ---- DELETE

// update/modify ---- PUT
