const { createMission, getMissions } = require('./functions/missions');
const { getPlanets, getPlanet } = require('./functions/planets');
const { getPeople, getPerson } = require('./functions/people');
const { getFilms } = require('./functions/films');

module.exports = {
  createMission,
  getMissions,
  getPlanets,
  getPlanet,
  getPeople,
  getPerson,
  getFilms
};