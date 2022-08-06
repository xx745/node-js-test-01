const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('HOME');
});

router.get('/about-page', (req, res) => {
  res.send('about-page');
});

router.get('/valves', (req, res) => {
  res.send('valves');
});

router.get('/jobs', (req, res) => {
  res.send('jobs');
});

router.get('/blog', (req, res) => {
  res.send('blog');
});

module.exports = router;
