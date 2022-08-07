const fs = require('fs');
const { mdLoadAndConvert } = require('./markdownLoadAndConvert');

function readDir(dirPath) {
  return fs.readdirSync(dirPath, (err, items) => {
    if (err) {
      console.log(err);

      return [];
    }

    return items;
  });
}

async function renderBlogFromFolders() {
  const BLOG_ERROR = '<h2>Unable to render blog!</h2>';
  const BLOG_DIR_PATH = './content/blog';

  try {
    const dirList = readDir(BLOG_DIR_PATH);

    if (!dirList.length) {
      return BLOG_ERROR;
    } else {
      return await Promise.all(dirList.map(async monthName => {
        const blogMonth = `<h4 class="blog-month">${monthName}</h4>`;
        const blogEntries = readDir(`${BLOG_DIR_PATH}/${monthName}`);

        return await Promise.all(blogEntries.map(async entryName => {
          const blogEntry = `<h5 class="blog-entry">${entryName}</h5>`;
          const pathToContent = `${BLOG_DIR_PATH}/${monthName}/${entryName}/index.md`;
          const blogContent = await mdLoadAndConvert(pathToContent);

          return `<div class="blog-post">${blogMonth}${blogEntry}${blogContent}</div>`;
        }));
      }));
    }
  } catch (err) {
    console.log(err);

    return BLOG_ERROR;
  }
}

module.exports = {
  renderBlogFromFolders
};
