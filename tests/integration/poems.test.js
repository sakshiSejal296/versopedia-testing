// Load environment variables from .env.test
require('dotenv').config({ path: '.env.test' });

const request = require('supertest');
const app = require('../../app'); // Adjust if your server entry point is named differently
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

beforeAll(async () => {
  await prisma.poem.deleteMany(); // Optional: start with a clean DB
});

afterAll(async () => {
  await prisma.$disconnect();
});

describe('Integration: /api/poems', () => {
  test('should create a new poem', async () => {
    const res = await request(app)
      .post('/api/poems')
      .send({
        title: 'Hope',
        author: 'testUser',
        content: 'Even in shadows, hope survives.',
        genre: 'Motivational',
        date: new Date().toISOString()
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('Hope');
  });

  test('should fetch all poems', async () => {
    const res = await request(app).get('/api/poems');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
