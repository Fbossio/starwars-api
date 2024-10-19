const { fetchListData, fetchResourceById } = require('../services/swapiService');
const { filmMapper } = require('../mappers/filmMapper');

const getFilms = async () => {
    try {
        const films = await fetchListData('films', filmMapper);
        return {
            statusCode: 200,
            body: JSON.stringify(films),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
    
};

const getFilm = async (event) => {
    const { id } = event.pathParameters;
    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'ID is required' }),
        };
    }
    try {
        const film = await fetchResourceById('films', id, filmMapper);
        return {
            statusCode: 200,
            body: JSON.stringify(film),
        };
    } catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: error.message }),
        };
    }
};

module.exports = {
    getFilms,
    getFilm
};