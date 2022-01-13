const mysql = require('mysql2');

class Database {

  getConnection() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: 'admin123',
      database: 'db_colegio'
    });
    return connection;
  }

}
module.exports = Database;


