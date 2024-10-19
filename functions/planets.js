const { fetchListData, fetchResourceById } = require('../services/swapiService');
const { planetMapper } = require('../mappers/planetMapper');

const getPlanets = async () => {
    try {
        const planets = await fetchListData('planets', planetMapper);
        return {
            statusCode: 200,
            body: JSON.stringify(planets),
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message }),
        };
    }
    
};

const getPlanet = async (event) => {
    const { id } = event.pathParameters;
    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'ID is required' }),
        };
    }
    try {
        const planet = await fetchResourceById('planets', id, planetMapper);
        return {
            statusCode: 200,
            body: JSON.stringify(planet),
        };
    } catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: error.message }),
        };
    }
};

module.exports = {
    getPlanets,
    getPlanet
};