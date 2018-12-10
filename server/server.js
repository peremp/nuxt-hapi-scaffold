import consola from 'consola';
import Hapi from 'hapi';

import HapiNuxt from 'hapi-nuxt';
import HapiNuxtConfig from '../client/nuxt.config';

// Plugins
// Engines
import AboutPageRoute from './pages/about/AboutPageRoute';
// Controllers
import { aboutPageModelFactory } from './providers/modelProvider';

const plugins = [
  {
    plugin: HapiNuxt,
    options: HapiNuxtConfig
  },
  {
    plugin: AboutPageRoute,
    options: {
      model: aboutPageModelFactory()
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
