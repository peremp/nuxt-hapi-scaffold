/**
 * @type {Function}
 */
export default class AboutPageModel {
  /**
   * @param {AboutRepository} aboutRepository
   */
  constructor({ aboutRepository }) {
    this.aboutRepository = aboutRepository;
  }

  /**
   * @return {Object}
   */
  async get({ locale }) {
    const data = await this.aboutRepository.get({ locale });
    return data;
  }
}
