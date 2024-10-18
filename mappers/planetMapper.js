const planetMapper = (planet) => {
    return {
        nombre: planet.name,
        periodo_rotacion: planet.rotation_period,
        periodo_orbital: planet.orbital_period,
        diametro: planet.diameter,
        clima: planet.climate,
        gravedad: planet.gravity,
        terreno: planet.terrain,
        agua_superficial: planet.surface_water,
        poblacion: planet.population,
        residentes: planet.residents,
        peliculas: planet.films,
        fecha_creacion: planet.created,
        fecha_edicion: planet.edited,
        url: planet.url
    }
};

module.exports = {
    planetMapper
};