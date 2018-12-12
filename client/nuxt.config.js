const path = require('path');
const routes = require('./pages');

const PATHS = {
  root: path.resolve(__dirname, '../'),
  client: path.resolve(__dirname, '../client')
};

const pkg = require('../package');

module.exports = {
  mode: 'universal',
  rootDir: PATHS.root,
  srcDir: PATHS.client,
  parallel: true,
  sourcemap: false,
  cache: true,
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nuxt scaffold',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  env: {
    NODE_ENV: process.env.NODE_ENV || 'development',
    BASE_DATA_API_URL: 'http://localhost:3000/data'
  },
  transition: {
    name: 'layout',
    mode: 'out-in'
  },
  router: {
    middleware: [
      'deviceDetector',
      'i18n'
    ],
    extendRoutes(nuxtRoutes, resolve) {
      nuxtRoutes.splice(0, nuxtRoutes.length, ...routes
        .map(route => ({ ...route, component: resolve(__dirname, route.component) })));
    }
  },
  plugins: [
    '~/plugins/config',
    '~/plugins/i18n.js'
  ],

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  axios: {
    // proxyHeaders: false
  },

  styleResources: {
    scss: [path.resolve(__dirname, './assets/sass/index.scss')]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
    },
    splitChunks: {
      layouts: true
    }
  }
};
