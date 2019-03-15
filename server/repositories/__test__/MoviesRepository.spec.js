import MoviesRepository from '../MoviesRepository';

function createInstance({
  getResponse = {}
} = {}) {
  const apiClient = jest.fn(() => ({ json: () => getResponse }));

  const instance = new MoviesRepository({
    apiClient
  });

  return {
    apiClient,
    instance
  };
}

describe('MoviesRepository', () => {
  it('should be a class with the proper API: get()', () => {
    expect(MoviesRepository).toBeInstanceOf(Function);
    expect(MoviesRepository.prototype.get).toBeInstanceOf(Function);
  });

  it('should return the data coming from the api', async () => {
    const getResponse = ['sh', 'ows'];
    const { instance } = createInstance({ getResponse });
    const result = await instance.get({ locale: 'en' });

    expect(result).toEqual({
      shows: getResponse
    });
  });
});
