export default class AboutPageRepository {
  constructor({ apiClient }) {
    this.apiClient = apiClient;
  }

  async get({ locale }) {
    const data = await this.apiClient.get(locale);
    return data;
  }
}
