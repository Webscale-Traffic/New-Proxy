const axios = require('axios');

module.exports = {
  // calendar
  //
  getCalendar: (req, res) => {
    axios.get('http://52.53.165.191:9042/properties/:property_id/reservations')
      .then((data) => { res.status(200).send(data) })
      .catch((error) => { res.status(404).send(error) })
  },
  postCalendar: (req, res) => {
    axios.get('52.53.165.191/properties/:property_id/reservations')
      .then((data) => { res.status(201).send() })
      .catch((error) => { res.status(400).send(error) })
  },
  // Carousel
  //
  getCarousel: (req, res) => {
    axios.get('http://52.53.165.191:9042/properties/:property_id/reservations')
      .then((data) => { res.status(200).send(data) })
      .catch((error) => { res.status(404).send(error) })
  },
  postCarousel: (req, res) => {
    axios.get('52.53.165.191/properties/:property_id/reservations')
      .then((data) => { res.status(201).send() })
      .catch((error) => { res.status(400).send(error) })
  },
  // Reviews
  //
  getReviews: (req, res) => {
    axios.get('http://52.53.165.191:9042/properties/:property_id/reservations')
      .then((data) => { res.status(200).send(data) })
      .catch((error) => { res.status(404).send(error) })
  },
  postReviews: (req, res) => {
    axios.get('52.53.165.191/properties/:property_id/reservations')
      .then((data) => { res.status(201).send() })
      .catch((error) => { res.status(400).send(error) })
  }
}