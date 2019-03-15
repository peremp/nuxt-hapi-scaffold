import memoize from 'memoizejs';
import fetch from 'isomorphic-unfetch';
import MoviesRepository from '../repositories/MoviesRepository';

export const moviesRepositoryFactory = memoize(() => new MoviesRepository({
  apiClient: fetch
}));

export default {};
