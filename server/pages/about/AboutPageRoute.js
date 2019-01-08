/**
 * @type {Object}
 */
export default {
  name: 'About',
  /**
   * @param {hapi.Server} server
   * @param {Object} options
   * @param  {AboutPageModel} options.model
   */
  register(server, options) {
    const { model } = options;

    server.route({
      method: 'GET',
      path: '/api/about',
      async handler(request, h) {
        const { locale } = request.query;
        const data = await model.get({ locale });

        return h.response(data);
      },
      config: {
        app: {
          pageId: 'About'
        },
        description: 'About page'
      }
    });
  }
};
