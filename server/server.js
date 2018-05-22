//require in express from node module
//express is a function.
const express = require('express');
//This gives us back an express app -its an object
const app = express();
//tell express where to look for files when getting a request from someones browser
app.use(express.static('server/public'));

//start
port = 5000;
app.listen(port,function(){
    console.log(`Listning to Port ${port}`);
})