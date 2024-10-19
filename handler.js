const { createMission, listMissions, getMission } = require('./functions/missions');
const { getPlanets, getPlanet } = require('./functions/planets');
const { getPeople, getPerson } = require('./functions/people');
const { getFilms, getFilm } = require('./functions/films');

module.exports = {
  createMission,
  listMissions,
  getMission,
  getPlanets,
  getPlanet,
  getPeople,
  getPerson,
  getFilms,
  getFilm,
};