const axios = require('axios');

module.exports = {
  getCalendar: (req, res) => {
    axios.get(`http://52.53.165.191:6060/properties/${req.params.id}/reservations`)
      .then((data) => {
        // console.log(data)
        res.status(200).send(data.data) })
      .catch((error) => {
        console.log(error);
        res.status(404).send(error) })
  },
  postCalendar: (req, res) => {
    axios.post('52.53.165.191:6060/properties/:id/reservations')
      .then((data) => { res.status(201).send() })
      .catch((error) => { res.status(400).send(error) })
  },
  getCarousel: (req, res) => {
    axios.get(`http://54.219.180.82:3004/properties/${req.params.id}/similiar`)
      .then((data) => { res.status(200).send(data.data) })
      .catch((error) => { res.status(404).send(error) })
  },
  postCarousel: (req, res) => {
    axios.post('http://54.219.180.82:3004/properties/:id/savedList')
      .then((data) => { res.status(201).send() })
      .catch((error) => { res.status(400).send(error) })
  },
  getReviews: (req, res) => {
    axios.get('http://184.169.237.98:3003/rooms/:id/reviews')
      .then((data) => { res.status(200).send(data) })
      .catch((error) => { res.status(404).send(error) })
  }
}