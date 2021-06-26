DEVELOPMENT = {
  "type": "postgres",
  "host": "localhost",
  "username": "postgres",
  "password": "xavante",
  "port": 5432,
  "database": "nlw-valoriza-db",
  "migrations": ["src/database/migrations/*.ts"],
  "entities": ["src/entities/*.ts"],
  "cli": {
    "migrationsDir": "src/database/migrations",
    "entitiesDir": "src/entities"
  }
}

PRODUCTION = {
  "type": "postgres",
  "host": "nlw-valoriza-db",
  "username": "postgres",
  "password": process.env.POSTGRES_PASSWORD,
  "port": 5432,
  "database": "nlw-valoriza-db",
  "migrations": ["dist/database/migrations/*.ts"],
  "entities": ["dist/entities/*.js"],
  "cli": {
    "migrationsDir": "dist/database/migrations",
    "entitiesDir": "dist/entities"
  }
}

process.env.MODE === "PRODUCTION" ?
  module.exports = PRODUCTION :
  module.exports = DEVELOPMENT
