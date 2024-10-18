const { createMission, getMissions } = require('./functions/missions');
const { getPlanets } = require('./functions/planets');
const { getPeople } = require('./functions/people');
const { getFilms } = require('./functions/films');

module.exports = {
  createMission,
  getMissions,
  getPlanets,
  getPeople,
  getFilms
};