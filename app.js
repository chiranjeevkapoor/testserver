const dboperations = require('./dboperations');
//this file is just to test the connection
dboperations.getUsers().then((result)=>{
    console.log(result)
})