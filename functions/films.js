const { fetchListData } = require('../services/swapiService');
const { filmMapper } = require('../mappers/filmMapper');

const getFilms = async () => {
    return await fetchListData('films', filmMapper);
};

module.exports = {
    getFilms
};