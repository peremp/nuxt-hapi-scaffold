import memoize from 'memoizejs';
import MoviesPageModel from '../pages/movies/MoviesPageModel';

import { moviesRepositoryFactory } from './repositoryProvider';

export const moviesPageModelFactory = memoize(() => new MoviesPageModel({
  moviesRepository: moviesRepositoryFactory()
}));

export default {};
