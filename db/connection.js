const mysql = require('mysql2');

// Connect to database
const db = mysql.createConnection({
    host: 'localhost',
    // Your MySQL username,
    user: 'root',
    // Your MySQL password
    password: 'bootcamp55',
    database: 'cms'
},
console.log('Connected to the employee cms database.')
);

module.exports = db;
