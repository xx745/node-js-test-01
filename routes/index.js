const express = require('express');
const router = express.Router();
const { mdLoadAndConvert } = require('../helpers/markdownLoadAndConvert');
const { renderBlogFromFolders } = require('../helpers/renderBlog');

async function renderPage(res, routePath) {
  try {
    const content = await mdLoadAndConvert(`./content${routePath}/index.md`);

    res.render('template', { content });
  } catch (err) {
    console.log(err);

    res.render('template', { content: '<h2>Could not load page content!</h2>' });
  }
}

router.get('/', (req, res) => {
  res.render('template', { content: '<h1>Home page</h1>' });
});

router.get('/not-found', (req, res) => {
  res.render('template', { content: '<h1>Page not found!</h1>' });
});

router.get('/about-page', (req, res) => renderPage(res, req.route.path));

router.get('/valves', (req, res) => renderPage(res, req.route.path));

router.get('/jobs', (req, res) => renderPage(res, req.route.path));

router.get('/blog', async (req, res) => {
  const content = await renderBlogFromFolders();

  const htmlToRender = Array.isArray(content)
    ? content.flat().join('\n')
    : content;

  res.render('template', { content: htmlToRender });
});

module.exports = router;
