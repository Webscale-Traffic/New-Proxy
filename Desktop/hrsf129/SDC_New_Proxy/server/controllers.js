const axios = require('axios');

module.exports = {
  // calendar
  //
  getCalendar: (req, res) => {
    axios.get(`http://52.53.165.191:6060/properties/${req.params.id}/reservations`)
    // axios.get(`http://52.53.165.191:6060/properties/${req.params.id}/reservations`)
      .then((data) => {
        // console.log(data)
        res.status(200).send(data) })
      .catch((error) => {
        console.log(error);
        res.status(404).send(error) })
  },
  postCalendar: (req, res) => {
    axios.post('52.53.165.191:6060/properties/:id/reservations')
      .then((data) => { res.status(201).send() })
      .catch((error) => { res.status(400).send(error) })
  },
  // Carousel
  //
  getCarousel: (req, res) => {
    // let propId = window.location.pathname;
    // let id = propId.match(/(\d+)/)[0];
    // axios.get(`/properties/${id}/similiar`)
    axios.get(`http://54.219.180.82:3004/properties/${req.params.id}/similar`)
      .then((data) => { res.status(200).send(data) })
      .catch((error) => { res.status(404).send(error) })
  },
  postCarousel: (req, res) => {
    axios.post('http://54.219.180.82:3004/properties/:id/savedList')
      .then((data) => { res.status(201).send() })
      .catch((error) => { res.status(400).send(error) })
  },
  // Reviews
  //
  // getReviews: (req, res) => {
  //   axios.get('http://52.53.165.191:9042/properties/:property_id/reservations')
  //     .then((data) => { res.status(200).send(data) })
  //     .catch((error) => { res.status(404).send(error) })
  // },
  // postReviews: (req, res) => {
  //   axios.post('52.53.165.191/properties/:property_id/reservations')
  //     .then((data) => { res.status(201).send() })
  //     .catch((error) => { res.status(400).send(error) })
  // }
}