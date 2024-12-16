
const connection = require('../database/connection');



// Funzione per ottenere la lista dei film
function index(req, res) {
    const sql = 'SELECT * FROM movies';

    connection.query(sql, (err, results) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Errore nel recupero dei film' });
        }
        res.json({
            movies: results,
            count: results.length
        });
    });
}

// Funzione per ottenere i dettagli di un singolo film e le sue recensioni
function show(req, res) {
    const movieId = req.params.id;

    const movieSql = 'SELECT * FROM movies WHERE id = ?';
    const reviewsSql = 'SELECT * FROM reviews WHERE movie_id = ? ORDER BY id DESC';

    // Otteniamo il film specificato dall'ID
    connection.query(movieSql, [movieId], (err, movieResults) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Errore nel recupero del film' });
        }

        if (movieResults.length === 0) {
            return res.status(404).json({ error: 'Film non trovato' });
        }

        // Otteniamo le recensioni per quel film
        connection.query(reviewsSql, [movieId], (err, reviewsResults) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Errore nel recupero delle recensioni' });
            }

            const movie = {
                ...movieResults[0],
                reviews: reviewsResults
            };

            res.json(movie);
        });
    });
}

// Funzione per aggiungere una recensione
function review(req, res) {
    const movieId = Number(req.params.id);
    const { username, review, vote } = req.body;
    const now = new Date();
    const reviewDate = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;

    const sql = 'INSERT INTO reviews (username, review, vote, movie_id, date) VALUES (?, ?, ?, ?, ?)';

    connection.query(sql, [username, review, vote, movieId, reviewDate], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Errore nell\'aggiunta della recensione' });
        }

        res.status(201).json({ success: true, message: 'Recensione aggiunta con successo' });
    });
}

module.exports = {
    index,
    show,
    review
};
