import memoize from 'memoizejs';
import AboutPageModel from '../pages/about/AboutPageModel';

import { aboutRepositoryFactory } from './repositoryProvider';

export const aboutPageModelFactory = memoize(() => new AboutPageModel({
  aboutRepository: aboutRepositoryFactory()
}));

export default {};
