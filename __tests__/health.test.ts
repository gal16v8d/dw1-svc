import request from 'supertest';
import config from '../src/config/app.config';
import server from '../src/server';

test('health check test', async () => {
  await request(server)
    .get(`/${config.server.basePath}/health`)
    .expect(200)
    .expect('Content-Type', /application\/json/);
});
