/**
 * @type {Function}
 */
export default class MoviesPageModel {
  /**
   * @param {MoviesRepository} moviesRepository
   */
  constructor({ moviesRepository }) {
    this.moviesRepository = moviesRepository;
  }

  /**
   * @return {Object}
   */
  async get({ locale }) {
    const data = await this.moviesRepository.get({ locale });
    return data;
  }
}
