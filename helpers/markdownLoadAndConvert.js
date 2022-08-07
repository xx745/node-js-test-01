const fs = require('fs');
const mdConverter = require('markdown-it')();

async function mdLoadAndConvert(mdFilePath) {
  return await fs
    .promises
    .readFile(mdFilePath, 'utf-8')
    .then(mdFileContent => mdConverter.render(mdFileContent))
    .catch((err) => {
      console.log(err);

      return '<h2>Unable to load blog content!</h2>';
    });
}

module.exports = {
  mdLoadAndConvert
};
