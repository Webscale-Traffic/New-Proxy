// ============================================================ //
// Dependency
//  ----------------------------------------------------------- //
const newrelic = require('newrelic')
const express = require('express');
const app = express();
const path = require('path');
const controllers = require('./controllers.js');
const bodyParser = require('body-parser');

const port = 5291


// ============================================================ //
// MiddleWare
//  ----------------------------------------------------------- //
app.use('/properties/:id', bodyParser.json());
// app.use(express.json());
app.use('/properties/:id', express.static(path.join(__dirname, '../public')));

// ============================================================ //
// Routes
//  ----------------------------------------------------------- //

app.get('/properties/:id/reservations', (req, res) => {
  // console.log(req.params);
  controllers.getCalendar(req, res);
})
app.post('/properties/:id/reservations', (req, res) => {
  // console.log(req.body);
  controllers.postCalendar(req, res);
})
app.get('/properties/:id/similiar', (req, res) => {
  // console.log(req.params);
  controllers.getCarousel(req, res);
})
app.post('/properties/:id/savedList', (req, res) => {
  // console.log(req.body);
  controllers.postCarousel(req, res);
})
app.get('/rooms/:id/reviews', (req, res) => {
  console.log(req.params);
  controllers.getReviews(req, res);
})

// ============================================================ //
// Start Server
//  ----------------------------------------------------------- //

app.listen(port, (err) => {
  if (err) {
    console.error('server issues:', err);
  } else {
    console.log(`listening on port ${port}`);
  }
})
