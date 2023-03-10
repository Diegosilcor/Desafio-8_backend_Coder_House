const path = require('path');

module.exports = {
    mariaDB: {
        client: 'mysql',
        connection: {
            host: "127.0.0.1",
            port: 8889,
            user: 'root',
            password: 'root',
            database: 'desafio'
        }
    },
    sqlite: {
        client: 'sqlite3',
        connection: {
            filename: path.resolve(__dirname, './ecommerce.sqlite') 
        }
    }
}