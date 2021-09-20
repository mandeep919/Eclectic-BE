const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
    throw new Error("Could not find .env file");
}

process.env.NODE_ENV = process.env.NODE_ENV || "development";

const connection = {
    user: process.env.DB_USER_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST
};

const knexConfig = {
    client: process.env.DB_CLIENT,
    connection,
    migrations: {
        directory: "./tools/knex/migrations"
    },
    seeds: {
        directory: "./tools/knex/seeds"
    }
};

module.exports = knexConfig;
