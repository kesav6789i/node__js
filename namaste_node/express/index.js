//routing and request handlers
//using nodemon
const express = require('express');
// const path = require('path');
const app = express();

app.get('/', function (req, res) {
  res.send('Hi msg from server');

})
app.get('/hello', function (req, res) {
  res.send('Hello.... msg from server');

})



app.listen(3000);