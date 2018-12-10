import memoize from 'memoizejs';
import AboutRepository from '../repositories/AboutRepository';

const fakeApiClient = {
  get(locale) {
    return locale === 'en'
      ? {
        title: 'Fake Title',
        description: 'Fake API description'
      }
      : {
        title: 'Título fake',
        description: 'Descripción fake de la API'
      };
  }
};

export const aboutRepositoryFactory = memoize(() => new AboutRepository({
  apiClient: fakeApiClient
}));

export default {};
