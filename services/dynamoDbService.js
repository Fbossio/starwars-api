const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.TableName;

const setMission = async (mission) => {
    const params = {
        TableName: TableName,
        Item: mission
    };
    try {
        return await dynamoDb.put(params).promise();
    } catch (error) {
        throw new Error('Error saving mission to DynamoDB');              
    }
}

const getMissions = async () => {
    const params = {
        TableName: TableName,
    };
    try {
        const result = await dynamoDb.scan(params).promise();
        return result.Items;
        
    } catch (error) {
        throw new Error('Error retrieving missions from DynamoDB');        
    }
    
}

const getMissionById = async (id) => {
    const params = {
        TableName: TableName,
        Key: { id }
    };

    try {
        const result = await dynamoDb.get(params).promise();
        if (!result.Item) {
            throw new Error(`Mission with ID ${id} not found`);
        }
        return result.Item;
    } catch (error) {
        throw new Error('Error retrieving mission from DynamoDB');
    }
};

module.exports = {
    setMission,
    getMissions,
    getMissionById
};