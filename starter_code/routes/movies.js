const express = require('express');
const router  = express.Router();
const Movie = require('../models/Movie');

router.get('/movies', (req, res) => {
    Movie.find().then(movies => {
    res.render('movies', { movieList: movies });
  });
});

router.get('/movies/:id', (req, res) => {
  Movie.findById(req.params.id).then(movie => {
    res.render('movieDetails', { singleMovie: movie });
});
});

module.exports = router;
