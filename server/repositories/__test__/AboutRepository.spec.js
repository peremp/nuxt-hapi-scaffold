import AboutRepository from '../AboutRepository';

function createInstance({
  getResponse = {}
} = {}) {
  const apiClient = {
    get: jest.fn(() => getResponse)
  };

  const instance = new AboutRepository({
    apiClient
  });

  return {
    apiClient,
    instance
  };
}

describe('AboutRepository', () => {
  it('should be a class with the proper API: get()', () => {
    expect(AboutRepository).toBeInstanceOf(Function);
    expect(AboutRepository.prototype.get).toBeInstanceOf(Function);
  });

  it('should return the data coming from the api', async () => {
    const getResponse = { repo: 'data' };
    const { instance } = createInstance({ getResponse });
    const result = await instance.get({ locale: 'en' });

    expect(result).toEqual(getResponse);
  });
});
