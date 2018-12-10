import AboutPageModel from '../AboutPageModel';

describe('AboutPageModel', () => {
  it('should be a class with the proper API: get()', () => {
    expect(AboutPageModel).toBeInstanceOf(Function);
    expect(AboutPageModel.prototype.get).toBeInstanceOf(Function);
  });
});
