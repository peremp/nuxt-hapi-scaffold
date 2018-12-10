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
  }
}
