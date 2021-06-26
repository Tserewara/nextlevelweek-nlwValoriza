module.exports = {
  "type": "postgres",
  "host": "nlw-valoriza-db",
  "username": "postgres",
  "password": process.env.POSTGRES_PASSWORD,
  "port": 5432,
  "database": "nlw-valoriza-db",
  "migrations": ["dist/database/migrations/*.js"],
  "entities": ["dist/entities/*.js"],
  "cli": {
    "migrationsDir": "dist/database/migrations",
    "entitiesDir": "dist/entities"
  }
}
