const mysql = require('mysql2');

class Database {

  getConnection() {
    const connection = mysql.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'supermarket'
    });
    return connection;
  }

}
module.exports = Database;


