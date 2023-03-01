//var Db  = require('./dboperations');
var user_info = require('./user_info');
const dboperations = require('./dboperations');

var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use('/api', router);

//test route
router.route('/helo').get((req,res)=>{
    console.log('hello');
    res.send('hello')
})

router.use((request,response,next)=>{
   console.log('middleware');
   next();
})

router.route('/users').get((request,response)=>{
    console.log('this route was hit')
    dboperations.getUsers().then(result => {
       response.json(result);
    })

})

router.route('/orders/:id').get((request,response)=>{

    dboperations.getUser(request.params.id).then(result => {
       response.json(result[0]);
    })

})

router.route('/orders').post((request,response)=>{

    let order = {...request.body}

    dboperations.addOrder(order).then(result => {
       response.status(201).json(result);
    })

})




var port = process.env.PORT || 8000;
app.listen(port);
console.log('Order API is runnning at ' + port);


