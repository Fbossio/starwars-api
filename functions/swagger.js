const path = require('path');
const fs = require('fs');
const swaggerUi = require('swagger-ui-dist');

module.exports.swaggerUI = async (event) => {
    const indexContent = fs.readFileSync(path.join(swaggerUi.getAbsoluteFSPath(), 'index.html')).toString();
    
    const swaggerDocumentUrl = 'http://starwars-ui-dev.s3-website-us-east-1.amazonaws.com/swagger.yaml';
    const updatedContent = indexContent.replace('https://petstore.swagger.io/v2/swagger.json', swaggerDocumentUrl);

    return {
        statusCode: 200,
        headers: { 'Content-Type': 'text/html' },
        body: updatedContent,
    };
}

module.exports.getSwaggerDocument = async () => {
    try {
        const swaggerDocumentPath = path.join(__dirname, '../swagger.yaml');  
        const swaggerDocument = fs.readFileSync(swaggerDocumentPath).toString();
        return {
            statusCode: 200,
            headers: { 'Content-Type': 'application/x-yaml' },
            body: swaggerDocument,
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ message: 'Error loading Swagger document', error: error.message }),
        };
    }
};
