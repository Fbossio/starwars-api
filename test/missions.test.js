const { createMission, listMissions, getMission } = require('../functions/missions');
const AWS = require('aws-sdk');


jest.mock('uuid', () => ({
    v4: jest.fn(() => '1234')
}));

jest.mock('aws-sdk', () => {
    const mDocumentClient = {
        scan: jest.fn(),
        put: jest.fn(),
        get: jest.fn(),
    };
    return {
        DynamoDB: {
            DocumentClient: jest.fn(() => mDocumentClient),
        },
    };
});



describe('Missions', () => {
    let documentClient;

    beforeEach(() => {
        
        documentClient = new AWS.DynamoDB.DocumentClient();
    });

    afterEach(() => {
        jest.clearAllMocks(); 
    });

    
    describe('listMissions', () => {
        it('should return a list of missions with status 200', async () => {
            const mockMissions = [
                {
                    id: '1234',
                    nombre: 'Mission 1',
                    descripcion: 'Mission 1 description',
                    recompensa: '1000',
                }
            ];

            
            documentClient.scan.mockImplementation(() => ({
                promise: () => Promise.resolve({ Items: mockMissions }),
            }));

            const result = await listMissions();

            
            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockMissions);
        });

        it('should return 500 if DynamoDB scan fails', async () => {
            
            documentClient.scan.mockImplementation(() => ({
                promise: () => Promise.reject(new Error('Error retrieving missions from DynamoDB')),
            }));

            const result = await listMissions();

            expect(result.statusCode).toBe(500);
            expect(JSON.parse(result.body).message).toBe('Error retrieving missions from DynamoDB');
        });
    });

    describe('createMission', () => {
        it('should create a mission and return it with status 201', async () => {
            const missionData = {
                nombre: 'Misión de prueba',
                descripcion: 'Descripción de prueba',
                recompensa: 5000,
            };

            
            documentClient.put.mockImplementation(() => ({
                promise: () => Promise.resolve(),
            }));

            const event = {
                body: JSON.stringify(missionData),
            };

            const result = await createMission(event);

            
            expect(result.statusCode).toBe(201);
            expect(JSON.parse(result.body)).toMatchObject({
                id: '1234',  
                ...missionData,
            });
        });

        it('should return 500 if DynamoDB put fails', async () => {
            const missionData = {
                nombre: 'Misión de prueba',
                descripcion: 'Descripción de prueba',
                recompensa: 5000,
            };

           
            documentClient.put.mockImplementation(() => ({
                promise: () => Promise.reject(new Error('Error saving mission')),
            }));

            const event = {
                body: JSON.stringify(missionData),
            };

            const result = await createMission(event);

            expect(result.statusCode).toBe(500);
            expect(JSON.parse(result.body).message).toBe('Error saving mission to DynamoDB');
        });
    });

    describe('getMission', () => {
        it('should return a mission by ID with status 200', async () => {
            const mockMission = {
                id: '1234',
                nombre: 'Misión de prueba',
                descripcion: 'Descripción de prueba',
                recompensa: 5000,
            };

            
            documentClient.get.mockImplementation(() => ({
                promise: () => Promise.resolve({ Item: mockMission }),
            }));

            const event = {
                pathParameters: { id: '1234' },
            };

            const result = await getMission(event);

            expect(result.statusCode).toBe(200);
            expect(JSON.parse(result.body)).toEqual(mockMission);
        });

        it('should return 404 if the mission is not found', async () => {
           
            documentClient.get.mockImplementation(() => ({
                promise: () => Promise.resolve({}),
            }));

            const event = {
                pathParameters: { id: '1234' },
            };

            const result = await getMission(event);

            expect(result.statusCode).toBe(404);
            expect(JSON.parse(result.body).message).toBe('Error retrieving mission from DynamoDB');
        });

        it('should return 400 if no ID is provided', async () => {
            const event = {
                pathParameters: {},
            };

            const result = await getMission(event);

            expect(result.statusCode).toBe(400);
            expect(JSON.parse(result.body).message).toBe('ID is required');
        });
        
    });
});
