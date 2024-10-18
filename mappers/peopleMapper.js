const { extractId } = require('../utils/extractId');

const peopleMapper = (person) => {
    // Extraer el id a partir del url
    const id = extractId(person.url);
    return {
        id,
        nombre: person.name,
        altura: person.height,
        peso: person.mass,
        color_cabello: person.hair_color,
        color_piel: person.skin,
        color_ojos: person.eye_color,
        fecha_nacimiento: person.birth_year,
        genero: person.gender,
        planeta_natal: person.homeworld,
        peliculas: person.films,
        especie: person.species,
        vehiculos: person.vehicles,
        naves_espaciales: person.starships,
        fecha_creacion: person.created,
        fecha_edicion: person.edited,
        url: person.url
    };
};

module.exports = {
    peopleMapper
};