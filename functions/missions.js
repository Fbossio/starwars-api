const { getMissions, setMission } = require('../services/dynamoDbService');
const { validateMission } = require('../validators/missionValidator')
const { v4: uuidv4 } = require('uuid');

const listMissions = async () => {
    try {
        const missions = await getMissions();
        return {
            statusCode: 200,
            body: JSON.stringify(missions)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: error.message })
        };
    }
};

const createMission = async (event) => {
    const data = JSON.parse(event.body);
    const errors = validateMission(data);
    if (errors.length) {
        return {
            statusCode: 400,
            body: JSON.stringify(errors)
        };
    }
    const mission = {
        id: uuidv4(),
        nombre: data.nombre,
        descripcion: data.descripcion,
        recompensa: data.recompensa
    };
    try {
        await setMission(mission);
        return {
            statusCode: 201,
            body: JSON.stringify(mission)
        };
    } catch (error) {
        return {
            statusCode: 500,            
            body: JSON.stringify({ message: error.message })
        };
    }
}

module.exports = {
    listMissions,
    createMission
};