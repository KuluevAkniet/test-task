const { Client } = require('pg');

const client = new Client({
    host: '127.0.0.1',
    user: 'postgres',
    database: 'Characters',
    password: 'postgres',
    port: 5432,
});

client.connect()


module.exports = client;