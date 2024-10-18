const { fetchListData } = require('../services/swapiService');
const { peopleMapper } = require('../mappers/peopleMapper');

const getPeople = async () => {
    return await fetchListData('people', peopleMapper);
}

module.exports = {
    getPeople
};