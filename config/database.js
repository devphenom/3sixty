module.exports = {
  "development": {
    "username": "threesixty",
    "password": 'phenom',
    "database": "threesixtydb",
    "host": "127.0.0.1",
    "dialect": "postgres",
    "operatorsAliases": false,
    "port": 5432
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "operatorsAliases": false
  }
}