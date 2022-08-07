const express = require('express');
const router = express.Router();
const { mdLoadAndConvert } = require('../helpers/markdownLoadAndConvert');
const { renderBlogFromFolders } = require('../helpers/renderBlog');

async function renderPage(res, routePath, fileName = 'index.md') {
  try {
    const content = await mdLoadAndConvert(`./content${routePath}/${fileName}`);

    res.render('template', { content });
  } catch (err) {
    console.log(err);

    res.render('template', { content: '<h2>Could not load page content!</h2>' });
  }
}

router.get('/', (req, res) => {
  res.redirect('/about-page');
});

router.get('/not-found', (req, res) => {
  res.render('template', { content: '<h1>Page not found!</h1>' });
});

router.get('/about-page', async (req, res) => await renderPage(res, req.route.path));

router.get('/valves', async (req, res) => await renderPage(res, req.route.path));

router.get('/jobs', async (req, res) => await renderPage(res, req.route.path));

router.get('/blog', async (req, res) => {
  const content = await renderBlogFromFolders();

  const htmlToRender = Array.isArray(content)
    ? content.flat().join('\n')
    : content;

  res.render('template', { content: htmlToRender });
});

router.get('/blog/:month/:entry/:file', async (req, res) => {
  const filePath = `/blog/${req.params.month}/${req.params.entry}`;
  const blogFile = req.params.file;

  await renderPage(res, filePath, blogFile);
});

module.exports = router;
