const request = require('supertest');

const server = require('./server.js');
const db = require('../data/dbConfig.js');

describe('server.js', () => {
    it('should set testing environment', () => {
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

            expect(Array.isArray(res.body)).toBe(true);
        });
    });

    describe('POST /', () => {
        afterEach(async () => {
            await db('games').truncate();
        });

        it('should add a game to the db', async () => {
            let res = await request(server).post('/games')
                .send({ 
                    title: 'Tales of Monkey Island',
                    genre: 'Adventure',
                    releaseYear: 2009 
                });

            res = await request(server).get('/games');

            console.log(res.body);
            expect(res.body).toHaveLength(1)
        });

        it('should return 201 OK', async () => {
            const res = await request(server).post('/games')
                .send({ 
                    title: 'Tales of Monkey Island',
                    genre: 'Adventure',
                    releaseYear: 2009 
                });

            expect(res.status).toBe(201);
        });

        it('should return JSON', async () => {
            const res = await request(server).post('/games')
                .send({ 
                    title: 'Tales of Monkey Island',
                    genre: 'Adventure',
                    releaseYear: 2009 
                });
            
            expect(res.type).toBe('application/json');
        });
    });
});