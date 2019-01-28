import hapi from 'hapi';
import AboutPageRoute from '../AboutPageRoute';

async function createServerWithModel(options = {}) {
  const model = { get: jest.fn() };
  const server = new hapi.Server();

  await server.register({
    plugin: AboutPageRoute,
    options: { model, ...options }
  });

  return { model, server };
}

describe('AboutPageRoute', () => {
  it('should be a Hapi plugin', () => {
    expect(AboutPageRoute).toBeInstanceOf(Object);
    expect(AboutPageRoute.register).toBeInstanceOf(Function);
    expect(AboutPageRoute.name).toBe('About');
  });

  describe('#handler(request, reply)', () => {
    describe('when a request is received', () => {
      it('should call the model asking for the problem', async () => {
        const { model, server } = await createServerWithModel();

        await server.inject({
          method: 'GET',
          url: '/api/about?locale=es'
        });

        expect(model.get).toHaveBeenCalledWith({ locale: 'es' });
      });

      it('should reply with the model response', async () => {
        const { model, server } = await createServerWithModel();
        const modelResponse = { model: 'response' };
        model.get = jest.fn(() => modelResponse);

        const response = await server.inject({
          method: 'GET',
          url: '/api/about?locale=es'
        });

        expect(response.statusCode).toBe(200);
        expect(response.result).toEqual({ model: 'response' });
      });
    });
  });
});
