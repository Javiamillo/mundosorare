import mysql from 'mysql2/promise';

const DEFAULT_CONFIG = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'root',
    database: 'mundosorare'
};

const connectionString = DEFAULT_CONFIG
console.log(connectionString)
const connection = await mysql.createConnection(connectionString);

console.log ('connection: ' + connection.data)

export class ArticuloModel {
    static async getAll () {

        const [articulos] = await connection.query(
            'SELECT * FROM articulos ORDER BY fecha_creacion DESC'
        )
        console.log('articulos=>' + articulos)
        
        return articulos
    }
    
    static async getById ({ id }) {

        const [articulos] = await connection.query(
            'SELECT * FROM articulos WHERE id_articulos = ?', [id]
        )
        console.log(articulos)
        if (articulos.length === 0) return null

        return articulos[0]
    }
}