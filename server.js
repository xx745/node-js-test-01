
const dotenv = require('dotenv');

dotenv.config();

const express = require('express');
const routes = require('./routes');
const server = express();
const mustacheExpress = require('mustache-express');

server.use(express.static('public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(routes);

server.use((req, res) => {
  res.sendStatus(404);
});

server.engine('html', mustacheExpress());
server.set('view engine', 'html');
server.set('views', __dirname);

module.exports = {
  server
};
