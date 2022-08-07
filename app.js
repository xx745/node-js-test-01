
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const portNumber = process.env.PORT || 5000;
const routes = require('./routes');
const app = express();
const mustacheExpress = require('mustache-express');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.use((req, res) => {
  res
    .status(404)
    .redirect('/not-found');
});

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname);

app.listen(portNumber, () => {
  console.log(`Environment: ${process.env.NODE_ENV}`);

  const appUrl = process.env.NODE_ENV !== 'production'
    ? `http://localhost:${portNumber}`
    : 'https://static-content-challenge.com';

  console.log(`Listening on: ${appUrl}`);
});
