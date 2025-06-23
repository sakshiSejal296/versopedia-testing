const request = require('supertest');
const app = require('../../app');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
jest.setTimeout(15000); // 15 seconds


let reflectionId;
let poemId;

beforeAll(async () => {
  // Ensure a clean state
  await prisma.reflection.deleteMany({});
  await prisma.$executeRaw`DELETE FROM "Poem" WHERE title = 'Test Poem'`; // raw SQL to bypass Prisma caching

  // Create a fresh test poem
  const poem = await prisma.poem.upsert({
    
      where:{title: 'Test Poem'},
      update:{},
      create:{
        title: 'Test Poem',
      content: 'This is test content.',
      author: 'Sakshi',
      genre: 'Motivational',
      date: new Date()
    }
  });

  poemId = poem.id;
},15000);

describe('Reflections API (E2E)', () => {
  it('POST /api/reflections — should create a new reflection', async () => {
    const res = await request(app)
      .post('/api/reflections')
      .send({
        name: 'Sakshi',
        text: 'Testing reflection creation',
        poemId
      });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    reflectionId = res.body.id;
  });

  it('GET /api/reflections — should return reflections array', async () => {
    const res = await request(app).get('/api/reflections');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('PUT /api/reflections/:id — should update the reflection', async () => {
    const res = await request(app)
      .put(`/api/reflections/${reflectionId}`)
      .send({ text: 'Updated reflection text' });

    expect(res.statusCode).toBe(200);
    expect(res.body.text).toBe('Updated reflection text');
  });

  it('DELETE /api/reflections/:id — should delete the reflection', async () => {
    const res = await request(app).delete(`/api/reflections/${reflectionId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toMatch(/deleted/i);
  });
});
