
const { server } = require('./server');
const request = require('supertest');
const appTest = request(server);

describe('Test main routes', () => {
  it('GET /about-page should return correct content', async () => {
    const response = await appTest.get('/about-page');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('This is the About page');
  });

  it('GET /jobs should return correct content', async () => {
    const response = await appTest.get('/jobs');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Jobs at Acme Co.');
  });

  it('GET /valves should return correct content', async () => {
    const response = await appTest.get('/valves');

    expect(response.statusCode).toBe(200);
    expect(response.text).toContain('Valves');
    expect(response.text).toContain('Acme Co. valves are amongst the highest quality');
  });

  it('GET /fake-route should return HTTP 404 - not found', async () => {
    const response = await appTest.get('/fake-route');

    expect(response.statusCode).toBe(404);
  });
});
