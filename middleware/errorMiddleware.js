// Middleware per la gestione dell'errore 404 (risorsa non trovata)
function handle404(req, res) {
    res.status(404).json({ error: 'Risorsa non trovata' });
}

// Middleware per la gestione degli errori 500 (errore interno del server)
function handle500(err, req, res, next) {
    console.error(err); // Log dell'errore per debug
    res.status(500).json({ error: 'Errore interno del server' });
}

module.exports = {
    handle404,
    handle500
};
