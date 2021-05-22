import express from 'express';
import request from 'supertest';

const app = express();

test('traer lista de paths', async () => {
    const res = await request(app).get('/route');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({});
});