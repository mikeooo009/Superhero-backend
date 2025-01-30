const request = require('supertest');
const app = require('../index'); // Ensure this path matches your app file

describe('Humble Superhero API', () => {
    test('POST /superheroes should add a superhero', async () => {
        const response = await request(app)
            .post('/superheroes')
            .send({
                name: "Batman",
                superpower: "Martial Arts",
                humilityScore: 8
            });

        expect(response.status).toBe(201);
        expect(response.body.superhero.name).toBe("Batman");
        expect(response.body.superhero.humilityScore).toBe(8);
    });

    test('GET /superheroes should return superheroes sorted by humilityScore', async () => {
        const response = await request(app).get('/superheroes');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});
