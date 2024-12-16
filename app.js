
const express = require('express');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const movieController = require('./controllers/movieController');


const app = express();
const port = 3000;

// Middleware per il parsing del corpo delle richieste (JSON)
app.use(bodyParser.json());

// Usa le rotte definite in movieRoutes
app.use(movieRoutes);

// Rotta di default
app.get('/', (req, res) => {
    res.send('Benvenuti nell\'app di gestione film!');
});

// Gestione errori 404
app.use((req, res) => {
    res.status(404).json({ error: 'Risorsa non trovata' });
});

// Avvio del server
app.listen(port, () => {
    console.log(`App in ascolto sulla porta ${port}`);
});
