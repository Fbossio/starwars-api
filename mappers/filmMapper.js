const { extractId } = require('../utils/extractId');

const filmMapper = (film) => {
    // Extraer el id a partir del url
    const id = extractId(film.url);
    return {
        id,
        titulo: film.title,
        episodio: film.episode_id,
        apertura: film.opening_crawl,
        director: film.director,
        productor: film.producer,
        fecha_lanzamiento: film.release_date,
        personajes: film.characters,
        planetas: film.planets,
        naves: film.starships,
        vehiculos: film.vehicles,
        especies: film.species,
        fecha_creacion: film.created,
        fecha_edicion: film.edited,
        url: film.url
    }
}

module.exports = {
    filmMapper
};