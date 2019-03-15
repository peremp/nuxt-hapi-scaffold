import consola from 'consola';
import Hapi from 'hapi';

import HapiNuxt from 'hapi-nuxt';
import HapiNuxtConfig from '../config/nuxt';

// Plugins
// Engines
import MoviesPageRoute from './pages/movies/MoviesPageRoute';
// Controllers
import { moviesPageModelFactory } from './providers/modelProvider';

const plugins = [
  {
    plugin: HapiNuxt,
    options: HapiNuxtConfig
  },
  {
    plugin: MoviesPageRoute,
    options: {
      model: moviesPageModelFactory()
    }
  }
];

const server = new Hapi.Server({
  host: process.env.HOST || '127.0.0.1',
  port: process.env.PORT || 3000
});

server.register(plugins)
  .then(() => server.start())
  .then(() => consola.ready({
    message: `Server running at: ${server.info.uri}`,
    badge: true
  }))
  .catch((err) => {
    consola.error(err);
    throw err;
  });
