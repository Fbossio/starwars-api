const { fetchListData } = require('../services/swapiService');
const { planetMapper } = require('../mappers/planetMapper');

const getPlanets = async () => {
    return await fetchListData('planets', planetMapper);
};

module.exports = {
    getPlanets
};