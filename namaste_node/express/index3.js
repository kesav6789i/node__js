// middleware and error handlers

const express = require('express')
const app = express()
const router = express.Router()


// router.use((req, res, next) => {
//     console.log('Time:', Date.now())
    
//     next()
//     console.log('use');
    
//   })
// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', (req, res, next) => {
  console.log('Request URL:', req.originalUrl)
  next()
}, (req, res, next) => {
  console.log('Request Type:', req.method)
  next()
})

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', (req, res, next) => {
  // if the user ID is 0, skip to the next router
  if (req.params.id === '0') next('route')
  // otherwise pass control to the next middleware function in this stack
  else next()
}, (req, res, next) => {
  // render a regular page
//   res.send('regular')
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', (req, res, next) => {
  console.log(req.params.id)
  next()
//   res.send('special')
  console.log('sp');
  
})

// mount the router on the app
app.use('/', router)
app.listen(3000)

// // a middleware function with no mount path. This code is executed for every request to the router
// router.use((req, res, next) => {
//     console.log('Time:', Date.now())
    
//     next()
//     console.log('use2');
    
//   })