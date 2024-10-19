const { getPlanet, getPlanets } = require('../functions/planets');
const { fetchListData, fetchResourceById } = require('../services/swapiService');

jest.mock('../services/swapiService');

describe('Planets', () => {
    describe('getPlanets', () => {

        it ('should return a list of planets with status 200', async () => {
        
            const mockPlanets = [
                {
                    name: 'Tatooine',
                    diameter: '10465',
                    rotation_period: '23',
                    orbital_period: '304',
                    gravity: '1 standard',
                    population: '200000',
                    climate: 'arid',
                    terrain: 'desert',
                },
            ];
    
            fetchListData.mockResolvedValue(mockPlanets);
            const result = await getPlanets();
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockPlanets);
        })
    
        it ('should return a 500 status if fetching planets fails', async () => {
            fetchListData.mockRejectedValue(new Error('Error fetching planets'));
            const result = await getPlanets();
            expect(result.statusCode).toBe(500);
            expect(JSON.parse(result.body)).toEqual({ message: 'Error fetching planets' });
        })

    })
    
    describe('getPlanet', () => {
        it('should return a specific planet with status 200', async () => {
            const mockPlanet = {
                name: 'Tatooine',
                diameter: '10465',
                rotation_period: '23',
                orbital_period: '304',
                gravity: '1 standard',
                population: '200000',
                climate: 'arid',
                terrain: 'desert',
            };
    
            fetchResourceById.mockResolvedValue(mockPlanet);
            const result = await getPlanet({ pathParameters: { id: 1 } });
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockPlanet);
        })

        it('should return a 400 status if no ID is provided', async () => {
            const result = await getPlanet({ pathParameters: {} });
            expect(result.statusCode).toBe(400);
            expect(JSON.parse(result.body)).toEqual({ message: 'ID is required' });
        })
    })
    
});