const packageJSON = require('../package.json');
require('@babel/polyfill');
require('@babel/register')(packageJSON.babel);
require('./server');
