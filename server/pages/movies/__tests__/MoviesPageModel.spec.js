import MoviesPageModel from '../MoviesPageModel';

function createInstance({
  getResponse = {}
} = {}) {
  const moviesRepository = {
    get: jest.fn(() => getResponse)
  };

  const instance = new MoviesPageModel({
    moviesRepository
  });

  return {
    moviesRepository,
    instance
  };
}

describe('MoviesPageModel', () => {
  it('should be a class with the proper API: get()', () => {
    expect(MoviesPageModel).toBeInstanceOf(Function);
    expect(MoviesPageModel.prototype.get).toBeInstanceOf(Function);
  });

  it('should call the repo with the locale as a param', async () => {
    const locale = 'en';
    const { instance, moviesRepository } = createInstance();
    await instance.get({ locale: 'en' });

    expect(moviesRepository.get).toHaveBeenCalledWith({ locale });
  });

  it('should return the data coming from the repo', async () => {
    const getResponse = { repo: 'data' };
    const { instance } = createInstance({ getResponse });
    const result = await instance.get({ locale: 'en' });

    expect(result).toEqual(getResponse);
  });
});
