const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const config = require('./config');
const { errorHandler } = require('./utils/error');

const app = express();
app.use(bodyParser.json());
app.use(cors());

fs.readdirSync(path.join(__dirname, 'routes')).map(file => {
  require('./routes/' + file)(app);
});

app.use(errorHandler);

require('./utils/db');

app.listen(config.port, err => {
  if (err) {
    console.error(err);
    process.exit(1);
  }

  console.log(`API is now running on port ${config.port} in ${config.env} mode`);
});