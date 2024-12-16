const mysql = require('mysql2')

//adesso creo un oggetto per impostare i dati della configurazione per effettuare la connessione al database
// effettivamente la connessione avverà dopo una query
const connection = mysql.createConnection({
    host: 'localhost', //argomento
    port: 3306, //argomento
    user: 'root', //argomento
    password: 'password', //argomento
    database: 'backend' //argomento

})

//connect è un metodo dell'oggetto connection (creato poc'anzi attraverso la funzione mysql.createConnection ) 
// stabilisce quasi con forza la connessione al database
connection.connect((err) => {
    if (err) {
        console.log('Error connecting to database', err);
    } else {
        console.log(`Database is connected`)
    }
})


module.exports = connection