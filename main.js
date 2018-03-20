const fs = require('fs');
const path = require('path');
const express = require('express');
const config = require('./config');

const api = express();

api.listen(config.port, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
    require('./routes/' + file)(api);
  });

  console.log(`API is now running on port ${config.port} in ${config.env} mode`);
});