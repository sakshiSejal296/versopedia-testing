<<<<<<< HEAD
const request = require('supertest');
const app = require('../../app');

describe('Invalid Routes', () => {
  it('should return 404 for unknown route', async () => {
    const res = await request(app).get('/unknown/route');
    expect(res.statusCode).toBe(404);
  });

  it('should return 400 or 500 for bad POST body', async () => {
    const res = await request(app)
      .post('/reflections')
      .send({}); // missing required fields

    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });
});
=======
const request = require('supertest');
const app = require('../../app');

describe('Invalid Routes', () => {
  it('should return 404 for unknown route', async () => {
    const res = await request(app).get('/unknown/route');
    expect(res.statusCode).toBe(404);
  });

  it('should return 400 or 500 for bad POST body', async () => {
    const res = await request(app)
      .post('/reflections')
      .send({}); // missing required fields

    expect(res.statusCode).toBeGreaterThanOrEqual(400);
  });
});
>>>>>>> 90192a9 (✨ Add Keploy CI workflow)
