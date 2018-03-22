require('dotenv').config({ path: './.env' });

module.exports = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  database: {
    uri: process.env.DATABASE_URI || 'mongodb://localhost:27017/react-starter-api'
  }
};
