const validateMission = (data) => {
    const errors = [];

    if (!data.nombre || typeof data.nombre !== 'string') {
        errors.push('El campo nombre es obligatorio y debe ser una cadena de texto.');
    }

    if (!data.descripcion || typeof data.descripcion !== 'string') {
        errors.push('El campo descripcion es obligatorio y debe ser una cadena de texto.');
    }
    
    if (!data.recompensa || typeof data.recompensa !== 'number') {
        errors.push('El campo recompensa es obligatorio y debe ser un número.');
    }

    return errors;
};

module.exports = {
    validateMission
}