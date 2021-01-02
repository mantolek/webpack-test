// if build without this file
// "dev": "webpack serve --mode development --env development --open --config webpack.dev.config.js --hot",
// "build": "webpack --config webpack.prod.config.js",

const environment = (process.env.NODE_ENV || 'development').trim();

if (environment === 'development') {
    module.exports = require('./webpack.dev.config');
} else {
    module.exports = require('./webpack.prod.config');
}
