import request from 'supertest';
import app from '../src/index';

describe('POST /register', () => {
    test('It should respond to the POST method', async () => {

        const userData = {
            firstName: 'Testing',
            lastName: 'Jest',
            age: 50,
            email: 'jest@io.com'
        }
        
        const response = await request(app)
            .post('/register')
            .send(userData);
        
        expect(response.statusCode).toBe(200);
        
        expect(response.body).toHaveProperty('message', 'User has been registered successfully!')

        expect(response.body.data).toHaveProperty('firstName', 'Testing')
        expect(response.body.data).toHaveProperty('lastName', 'Jest')
        expect(response.body.data).toHaveProperty('age', 50)
        expect(response.body.data).toHaveProperty('email', 'jest@io.com')
    })
})