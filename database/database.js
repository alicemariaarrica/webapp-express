const mysql = require('mysql2')
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'password',
    database: 'backend'

})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to database', err);
    } else {
        console.log(`Database is connected`)
    }
})


module.exports = connection