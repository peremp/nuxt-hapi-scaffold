const resolve = require('path').resolve;

module.exports = {
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'plugin:vue/recommended',
    "plugin:jest/recommended",
    'airbnb-base'
  ],
  plugins: [
    'vue',
    'jest'
  ],
  rules: {
    "comma-dangle": ["error", "never"],
    "no-param-reassign": "off"
  },
  env: {
    "jest/globals": true
  },
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~/components': resolve(__dirname, 'client/components'),
              '~/config': resolve(__dirname, 'client/config'),
              '~/mixins': resolve(__dirname, 'client/mixins'),
            },
          },
        },
      },
    },
  }
}
