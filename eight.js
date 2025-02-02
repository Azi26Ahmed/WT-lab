Demonstrate routes and parameter handling in Express.js.
// index.js
var express = require('express');
var app = express();
var loginroute = require('./Routes/login');
var signuproute = require('./Routes/signup');
app.get('/', (req,res)=> {
res.send('Hello Lab');
});
app.use('/login', loginroute);
app.use('/signup', signuproute);
app.get('/display/:uname/:pwd', (req,res)=> {
var values = req.params;
console.log(values);
console.log(req.query);
res.send('Values Received: ' + req.params.uname);
});
app.listen(8080);
// Routes/login.js
var express = require('express');
var router = express.Router();
router.get('/', (req,res)=> {
res.send('Login Page');
});
router.post('/', (req,res)=> {
res.send('Login Page');
});
module.exports = router;
// Routes/signup.js
var express = require('express');
var router = express.Router();
router.get('/', (req,res)=> {
res.send('Signup Page');
});
router.post('/', (req,res)=> {
res.send('Signup Page');
});
module.exports = router;
