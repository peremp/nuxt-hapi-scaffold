import AboutPageModel from '../AboutPageModel';

function createInstance({
  getResponse = {}
} = {}) {
  const aboutRepository = {
    get: jest.fn(() => getResponse)
  };

  const instance = new AboutPageModel({
    aboutRepository
  });

  return {
    aboutRepository,
    instance
  };
}

describe('AboutPageModel', () => {
  it('should be a class with the proper API: get()', () => {
    expect(AboutPageModel).toBeInstanceOf(Function);
    expect(AboutPageModel.prototype.get).toBeInstanceOf(Function);
  });

  it('should call the repo with the locale as a param', async () => {
    const locale = 'en';
    const { instance, aboutRepository } = createInstance();
    await instance.get({ locale: 'en' });

    expect(aboutRepository.get).toHaveBeenCalledWith({ locale });
  });

  it('should return the data coming from the repo', async () => {
    const getResponse = { repo: 'data' };
    const { instance } = createInstance({ getResponse });
    const result = await instance.get({ locale: 'en' });

    expect(result).toEqual(getResponse);
  });
});
