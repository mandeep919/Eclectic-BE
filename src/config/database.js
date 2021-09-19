const knex = require("knex");
const { database: config } = require("../config");

const dbCon = knex({
    client: process.env.DB_CLIENT,
    connection: config,
    // pool: {
    //     min: 2,
    //     max: 10,
    //     afterCreate: function (conn, done) {
    //         conn.query('SET timezone="UTC";', function (err) {
    //             if (err) {
    //                 console.log("db failure");
    //                 done(err, conn);
    //             }
    //         });
    //     }
    // },
    migrations: {
        directory: "./db/migrations"
    },
    seeds: {
        directory: "./db/seeds"
    }
});

module.exports = dbCon;
