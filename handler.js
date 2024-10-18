const { createMission, getMissions } = require('./missions');
const { getPlanets } = require('./planets');
const { getPeople } = require('./people');
const { getFilms } = require('./films');

module.exports = {
  createMission,
  getMissions,
  getPlanets,
  getPeople,
  getFilms
};