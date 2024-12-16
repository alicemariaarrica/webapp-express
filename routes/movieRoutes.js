const express = require('express');
const router = express.Router();

// Importa il movieController
const movieController = require('../controllers/movieController');

// Rotta per ottenere la lista dei film
router.get('/movies', movieController.index);

// Rotta per ottenere i dettagli di un singolo film con recensioni
router.get('/movies/:id', movieController.show);

// Rotta per aggiungere una recensione a un film
router.post('/movies/:id/reviews', movieController.review);

module.exports = router;
