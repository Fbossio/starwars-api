const { getFilm, getFilms } = require('../functions/films');
const { fetchListData, fetchResourceById } = require('../services/swapiService');

jest.mock('../services/swapiService');

describe('Films', () => {
    describe('getFilms', () => {
        it('should return a list of films with status 200', async () => {
            const mockFilms = [
                {
                    title: 'A New Hope',
                    episode_id: 4,
                    opening_crawl: 'It is a period of civil war.',
                    director: 'George Lucas',
                    producer: 'Gary Kurtz, Rick McCallum',
                    release_date: '1977-05-25',
                },
            ];

            fetchListData.mockResolvedValue(mockFilms);
            const result = await getFilms();
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockFilms);
        });

        it('should return a 500 status if fetching films fails', async () => {
            fetchListData.mockRejectedValue(new Error('Error fetching films'));
            const result = await getFilms();
            expect(result.statusCode).toBe(500);
            expect(JSON.parse(result.body)).toEqual({ message: 'Error fetching films' });
        });
    })

    describe('getFilm', () => {
        it('should return a specific film with status 200', async () => {
            const mockFIlm = {
                title: 'A New Hope',
                    episode_id: 4,
                    opening_crawl: 'It is a period of civil war.',
                    director: 'George Lucas',
                    producer: 'Gary Kurtz, Rick McCallum',
                    release_date: '1977-05-25',
            }

            fetchResourceById.mockResolvedValue(mockFIlm);
            const result = await getFilm({ pathParameters: { id: 1 } });
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockFIlm);
        })

        it('should return a 400 status if no ID is provided', async () => {
            const result = await getFilm({ pathParameters: {} });
            expect(result.statusCode).toBe(400);
            expect(JSON.parse(result.body)).toEqual({ message: 'ID is required' });
        })
    })
});