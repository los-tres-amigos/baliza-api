import request from 'supertest';
import app from '../index.js';

test('test the route', done => {
    request(app)
        .get('/route')
        .then(response => {
            expect(response.statusCode).toBe(200);
            expect(response.body).toEqual([{"routeName": "Route 1"}, {"routeName": "Route 2"}, {"routeName": "Route 3"}]);
            done();
        });
});