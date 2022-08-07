const app = require('./server');
const portNumber = process.env.PORT || 5000;

app.server.listen(portNumber, () => {
  console.log(`Environment: ${process.env.NODE_ENV}`);

  const serverUrl = process.env.NODE_ENV !== 'production'
    ? `http://localhost:${portNumber}`
    : 'https://static-content-challenge.com';

  console.log(`Listening on: ${serverUrl}`);
});
