const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.DYNAMODB_TABLE;

const setMission = async (mission) => {
    const params = {
        TableName,
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
        TableName
    };
    try {
        const result = await dynamoDb.scan(params).promise();
        return result.Items;
    } catch (error) {
        throw new Error('Error retrieving missions from DynamoDB');
    }
    
}

module.exports = {
    setMission,
    getMissions
};