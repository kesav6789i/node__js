const express = require('express');
const app = express();

// part1
// use method overrides all http methods 
// /hello (get)    
// also if order changes it do not happen check it ---- (order matters)
// app.use('/', function (req, res) {
//   res.send('Hi msg from server');

// })
// app.get('/hello', function (req, res) {
//   res.send('Hello.... msg from server');

// })


// part2
// not use "use" if your http methods not to be overrided
// /hello (get)
// app.get('/', function (req, res) {
//     res.send('Hi msg from server');
  
//   })
//   app.get('/hello', function (req, res) {
//     res.send('Hello.... msg from server');
  
//   })


//Note: part3
// only "use" method overrides (http methods : get,post,delete) and (routes extensions("/hel") ex:"/hel/12")

// ex: "/hello/123" (get or post or ..)  ✅
// ex: "/hello13" (get or post or ..)  ❌
// ex: "/123"       (get)       ❌
// app.get('/', function (req, res) {
//     res.send('Hi msg from server');
  
//   })
//   app.use('/hello', function (req, res) {
//     res.send('Hello.... msg from server');
  
//   })



// part4
// req.params vs req.query
//app.get('/hi/:param1', function(req,res){} );
//http://localhost:3000/hi/there?qs1=you&qs2=tube
//req.query👇
// {
//     qs1: 'you',
//     qs2: 'tube'
//   }
//req.params👇
//   {
//     param1: 'there'
//   }

//http://localhost:3000/hi/5?qs1=you&qs2=tube
app.get('/hi/:param1', function (req, res) {

        // res.send(req.params)
        res.send(req.query)
        // res.send(JSON.stringify(req.params) + JSON.stringify(req.query));
      
      })

app.listen(3000);

