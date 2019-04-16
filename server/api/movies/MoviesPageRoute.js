/**
 * @type {Object}
 */
export default {
  name: 'Movies',
  /**
   * @param {hapi.Server} server
   * @param {Object} options
   * @param  {MoviesPageModel} options.model
   */
  register(server, options) {
    const { model } = options;

    server.route({
      method: 'GET',
      path: '/api/movies',
      async handler(request, h) {
        const { locale } = request.query;
        const data = await model.get({ locale });

        return h.response(data);
      },
      config: {
        app: {
          pageId: 'Movies'
        },
        description: 'Movies page'
      }
    });
  }
};
