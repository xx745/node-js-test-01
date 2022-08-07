# Deployed to Heroku

[https://nodejs-blog-test-01.herokuapp.com](https://nodejs-blog-test-01.herokuapp.com)

# Development and running locally
## Prerequisites
1. Node.js >= 16
2. NPM >= 8
3. Rename `.env.example` to `.env` and set up your own environment variables

## Installation
```
npm install
```

## Development with hot reloading
```
npm run dev
```

## Running tests (JEST unit tests)
```
npm run test
```

## Running app
```
npm run start
```

## Running linter
```
npm run lint
```

### Running linter and fixing errors
```
npm run lintFix
```

# Node.js + Static Content

Business Scenario: Company's marketing department want a simple content management system and you've been tasked with building the MVP.

The challenge here is to create a `Node.js` application that displays HTML pages at URLs that match the paths of the folders and sub-folders in the `content` folder. The content of these pages should come from a combination of the template HTML file and a markdown file containing the content (`index.md`).

For example, for a folder called `about-page`, a request to `/about-page` would return a HTML page created from the `template.html` template and the `about-page/index.md` content file. The `template.html` file contains a `{{content}}` placeholder that would be replaced by the content for each page. A request to `/blog/june/company-update` would return a HTML page using the content file at `blog/june/company-update/index.md`.

Company's marketing department should be able to add extra folders to the `content` folder and the application should work with those without any requiring any code changes.

This repository contains a `template.html` template file and a sample `content` folder with sub-folders containing `index.md` markdown files (or other sub-folders).

Your application may make use of open-source code libraries. It is entirely up to you how the application performs the challenge.

## Testing

The application should be shipped with three tests:

* one that verifies that requests to valid URLs return a 200 HTTP status code
* one that verifies that requests to valid URLs return a body that contains the HTML generated from the relevant `index.md` markdown file
* one that verifies that requests to URLs that do not match content folders return a 404 HTTP status code
* NB: the tests should not depend on the existing sub-folders in the `content` folder, so the tests do not break as the content changes

## Bonus credit

In this MVP sprint, there are two nice-to-have tickets:

* The generated HTML page should be styled in a pleasing way
* The MVP's GitHub repository should be configured for hosting on a cloud hosting service, and include a link to a live deployment