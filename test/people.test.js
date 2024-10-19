const { getPeople, getPerson } = require('../functions/people');
const { fetchListData, fetchResourceById } = require('../services/swapiService');

jest.mock('../services/swapiService');

describe('People', () => {
    describe('getPeople', () => {
        it('should return a list of people with status 200', async () => {
            const mockPeople = [
                {
                    name: 'Luke Skywalker',
                    height: '172',
                    mass: '77',
                    hair_color: 'blond',
                }
            ];

            fetchListData.mockResolvedValue(mockPeople);
            const result = await getPeople();
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockPeople);
        })

        it('should return a 500 status if fetching people fails', async () => {
            fetchListData.mockRejectedValue(new Error('Error fetching people'));
            const result = await getPeople();
            expect(result.statusCode).toBe(500);
            expect(JSON.parse(result.body)).toEqual({ message: 'Error fetching people' });
        })
    })

    describe('getPerson', () => {
        it('should return a specific person with status 200', async () => {
            const mockPerson = {
                name: 'Luke Skywalker',
                height: '172',
                mass: '77',
                hair_color: 'blond',
            }

            fetchResourceById.mockResolvedValue(mockPerson);
            const result = await getPerson({ pathParameters: { id: 1 } });
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockPerson);
        })

        it('should return a 400 status if no ID is provided', async () => {
            const result = await getPerson({ pathParameters: {} });
            expect(result.statusCode).toBe(400);
            expect(JSON.parse(result.body)).toEqual({ message: 'ID is required' });
        })
    })
})