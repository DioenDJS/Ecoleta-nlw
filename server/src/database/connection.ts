import knex from 'knex';
import path from 'path';

/** criando a conexão com o banco de dados  */
const connection = knex({
    client:'sqlite3',
    connection:{
        filename: path.resolve(__dirname, 'database.sqlite')
    }
});

export default connection;