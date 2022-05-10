const mysql = require('mysql2');

require('dotenv').config();

const connectionProperties = {
    host: 'localhost',
    port: 3000,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
};

const connection = mysql.createConnection(connectionProperties);

module.exports = {
    connectionProperties,
    connection
};