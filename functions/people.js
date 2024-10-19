const { fetchListData, fetchResourceById } = require('../services/swapiService');
const { peopleMapper } = require('../mappers/peopleMapper');

const getPeople = async () => {
    return await fetchListData('people', peopleMapper);
}

const getPerson = async (event) => {
    const { id } = event.pathParameters;
    if (!id) {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'ID is required' }),
        };
    }
    try {
        const person = await fetchResourceById('people', id, peopleMapper);
        return {
            statusCode: 200,
            body: JSON.stringify(person),
        };
    } catch (error) {
        return {
            statusCode: 404,
            body: JSON.stringify({ message: error.message }),
        };
    }
};

module.exports = {
    getPeople,
    getPerson
};