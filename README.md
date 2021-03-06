# nuxt-hapi-scaffold #
[![ESLint](https://img.shields.io/badge/styled_with-eslint-blue.svg?colorB=8080f2)](https://github.com/eslint/eslint)
[![Issues](https://img.shields.io/github/issues/peremp/nuxt-hapi-scaffold.svg)](https://github.com/peremp/nuxt-hapi-scaffold/issues)
[![Stars](https://img.shields.io/github/stars/peremp/nuxt-hapi-scaffold.svg)](https://github.com/peremp/nuxt-hapi-scaffold/stargazers)

A basic nuxt+hapi scaffold with examples for:
- Multi-language
- Multi-platform (mobile/desktop)
- Custom routing
- Server UT

## Installation
#### With Docker
```
$ git clone git@github.com:peremp/nuxt-hapi-scaffold.git
$ cd nuxt-hapi-scaffold
$ docker-compose up
```

#### Local
```
$ git clone git@github.com:peremp/nuxt-hapi-scaffold.git
$ cd nuxt-hapi-scaffold
$ yarn install
$ yarn run dev
```

## Commands
#### Unit testing
```
# Client code tests
$ yarn run test:client

# Client code tests with auto-execution
$ yarn run tdd:client

# Server code tests
$ yarn run test:server

# Server code tests with auto-execution
$ yarn run tdd:server
```

#### Nuxt
```
# Build your application with webpack and minify the JS & CSS.
$ yarn run build

# Start the server in production mode (after build)
$ yarn run start

# Build the application and generate every route as a HTML file (used for static hosting).
$ yarn run generate
```

## Documentation

- Vue.js documentation: [https://vuejs.org/](https://vuejs.org/)
- Nuxt.js documentation: [https://nuxtjs.org](https://nuxtjs.org)
- Hapi.js documentation: [https://hapijs.com/](https://hapijs.com/)
