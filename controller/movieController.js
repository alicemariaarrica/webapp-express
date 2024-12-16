const connection = require('../database/connection');


const getAllMovies = (req, res) => {
    pool.query('SELECT * FROM films', (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Errore durante la ricerca dei film' });
        }
        res.json(results);
    });
};


const getMovieDetails = (req, res) => {
    const movieId = req.params.id;


    pool.query('SELECT * FROM films WHERE id = ?', [movieId], (err, movieResults) => {
        if (err || movieResults.length === 0) {
            return res.status(404).json({ error: 'Film non trovato' });
        }

        pool.query('SELECT * FROM reviews WHERE movie_id = ?', [movieId], (err, reviewResults) => {
            if (err) {
                return res.status(500).json({ error: 'Errore durante il recupero delle recensioni' });
            }


            res.json({
                movie: movieResults[0],
                reviews: reviewResults,
            });
        });
    });
};

module.exports = {
    getAllMovies,
    getMovieDetails,
};
