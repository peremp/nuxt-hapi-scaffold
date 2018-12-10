import AboutRepository from '../AboutRepository';

describe('AboutRepository', () => {
  it('should be a class with the proper API: get()', () => {
    expect(AboutRepository).toBeInstanceOf(Function);
    expect(AboutRepository.prototype.get).toBeInstanceOf(Function);
  });
});
