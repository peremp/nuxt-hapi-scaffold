const path = require('path');
const routes = require('../client/pages/routes');
const pkg = require('../package');

const PATHS = {
  root: path.resolve(__dirname, '../'),
  client: path.resolve(__dirname, '../client')
};

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  mode: 'universal',
  rootDir: PATHS.client,
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
    NODE_ENV: process.env.NODE_ENV || 'development'
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
    '~/assets/sass/index.scss',
    'flexboxgrid'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],

  axios: {
    proxy: true,
    browserBaseURL: process.env.API_URL_BROWSER || 'http://localhost:3000',
    debug: isDev
  },

  styleResources: {
    scss: [
      '~/assets/sass/config/index.scss'
    ]
  },
  /*
  ** Build configuration
  */
  build: {
    hardSource: isDev,
    /*
    ** You can extend webpack config here
    */
    extend(config) {
      // Project folders.
      config.resolve.alias['~/config'] = `${PATHS.root}/client/config`;
      config.resolve.alias['~/mixins'] = `${PATHS.root}/client/mixins`;
    },
    splitChunks: {
      layouts: true
    }
  }
};
