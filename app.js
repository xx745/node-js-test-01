const dotenv = require('dotenv');
dotenv.config();

const routes = require('./routes');
const express = require('express');
const portNumber = process.env.PORT || 5000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(portNumber, () => {
  console.log(`Environment: ${process.env.NODE_ENV}`);

  const appUrl = process.env.NODE_ENV !== 'production'
    ? `http://localhost:${portNumber}`
    : 'https://static-content-challenge.com';

  console.log(`Listening on: ${appUrl}`);
});
