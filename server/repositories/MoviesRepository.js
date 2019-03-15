export default class MoviesPageRepository {
  constructor({ apiClient }) {
    this.apiClient = apiClient;
  }

  async get() {
    const res = await this.apiClient('https://api.tvmaze.com/search/shows?q=dragon%20ball');
    const data = await res.json();

    return {
      shows: data
    };
  }
}
