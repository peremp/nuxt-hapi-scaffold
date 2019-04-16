import memoize from 'memoizejs';
import MoviesPageModel from '../api/movies/MoviesPageModel';

import { moviesRepositoryFactory } from './repositoryProvider';

export const moviesPageModelFactory = memoize(() => new MoviesPageModel({
  moviesRepository: moviesRepositoryFactory()
}));

export default {};
