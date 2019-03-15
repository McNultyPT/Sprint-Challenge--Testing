const request = require('supertest');

const server = require('./server.js');

describe('server.js', () => {
    it.skip('should set testing environment', () => {
        expect(process.env.DB_ENV).toBe('testing');
    });

    describe('GET /', () => {
        it('should return 200 OK', async () => {
            const res = await request(server).get('/games');

            expect(res.status).toBe(200);
        });

        it('should return JSON', async () => {
            const res = await request(server).get('/games');

            expect(res.type).toBe('application/json');
        });

        it('should return an array', async () => {
            const res = await request(server).get('/games');

            console.log(res.body);
            expect(Array.isArray(res.body)).toBe(true);
        });
    });
});