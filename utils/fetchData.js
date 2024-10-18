const axios = require('axios');

const fetchData = async (resource, mapper) => {
    const baseUrl = 'https://swapi.py4e.com/api';
    let nextUrl = `${baseUrl}/${resource}`;
    let allResults = [];

    try {        
        while (nextUrl) {
            const response = await axios.get(nextUrl);
            const { results, next } = response.data;
            allResults = allResults.concat(results.map(item => mapper(item)));
            nextUrl = next;  
        }

        return allResults;
    } catch (error) {
        throw new Error(`Error fetching data from ${resource}`);
    }
};

module.exports = {
    fetchData
};
