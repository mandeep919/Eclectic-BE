const dotenv = require("dotenv");

const envFound = dotenv.config();
if (!envFound) {
    throw new Error("Could not find .env file");
}

const ENV = process.env.NODE_ENV || "development";

const config = Object.assign({
    applicationTitle: process.env.TITLE,
    [ENV]: true,
    env: ENV,
    //cors: [process.env.CORS, process.env.CORS2],
    web: {
        port: process.env.PORT
    },
    database: {
        user: process.env.DB_USER_NAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST
    },
    logging: {
        appender: { type: "console" }
    },
    /*
    smtp: {
      service: process.env.SMTP_SERVICE,
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      // secure: process.env.SMTP_IS_SECURE, // use SSL
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD
      },
      from_name: process.env.SMTP_FROM_NAME,
      from_address: process.env.SMTP_FROM_ADDRESS
    },
    api: {
      host: process.env.PHP_HOST,
      user: process.env.PHP_USER,
      pass: process.env.PHP_PASS
    }
    */
    encryptString: process.env.ENCRYPT_STRING,
    crypt: {
        algorithm: "aes-256-ctr"
    }
});

module.exports = config;
