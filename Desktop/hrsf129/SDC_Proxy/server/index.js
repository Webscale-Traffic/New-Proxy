// ============================================================ //
// Dependency
//  ----------------------------------------------------------- //
const newrelic = require('newrelic')
const express = require('express');
const app = express();
const path = require('path');
const controllers = require('./controllers.js');

const port = 5291


// ============================================================ //
// MiddleWare
//  ----------------------------------------------------------- //

app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// ============================================================ //
// Routes
//  ----------------------------------------------------------- //

app.get('/properties/:property_id/reservations', (req, res) => {
  console.log(req);
  controllers.getCalendar(req, res);
})
app.post('/properties/:property_id/reservations', (req, res) => {
  console.log(req);
  controllers.postCalendar(req, res);
})
app.get('/', (req, res) => {
  console.log(req);
  controllers.getCarousel(req, res);
})
app.post('/', (req, res) => {
  console.log(req);
  controllers.postCarousel(req, res);
})
app.get('/', (req, res) => {
  console.log(req);
  controllers.getReviews(req, res);
})
app.post('/', (req, res) => {
  console.log(req);
  controllers.postReviews(req, res);
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
