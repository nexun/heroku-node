require("dotenv").config();
const { DATABASE_URL } = process.env;

module.exports = {
  development: {
    url: DATABASE_URL,
    dialect: "postgres",
  },
  test: {
    url: DATABASE_URL,
    dialect: "postgres",
  },
  production: {
    //url:"postgres://user:password@domain:port/database",
    url: DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        require: true, 
        rejectUnauthorized: false,
      },
    },
  },
};
