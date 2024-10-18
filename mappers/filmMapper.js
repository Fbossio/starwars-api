export const filmMapper = (film) => {
    return {
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