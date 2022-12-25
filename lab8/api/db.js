const { Pool } = require('pg');

class Database {
  constructor() {
    this.config = {
      user: 'nnepeput',
      host: 'surus.db.elephantsql.com',
      database: 'nnepeput',
      password: '23UCgzDMLjbTQMw29zHlJmvQNaQmHJ3I',
      port: 5432,
    };

    this.pool = new Pool(this.config);
  }

  query(sql) {
    return this.pool.query(sql);
  }

  close() {
    this.pool.end();
  }
}

module.exports = new Database();