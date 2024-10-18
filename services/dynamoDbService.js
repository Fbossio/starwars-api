const AWS = require('aws-sdk');
const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TableName = process.env.DYNAMODB_TABLE;

module.exports.setItem = async (item) => {
    const params = {
        TableName,
        Item: item
    };
    return dynamoDb.put(params).promise();
}

module.exports.getItems = async () => {
    const params = {
        TableName
    };
    const result = await dynamoDb.scan(params).promise();
    return result.Items;
}