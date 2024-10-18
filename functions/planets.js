const { fetchData } = require('../utils/fetchData');
const { planetMapper } = require('../mappers/planetMapper');

const getPlanets = async () => {
    return await fetchData('planets', planetMapper);
};

module.exports = {
    getPlanets
};