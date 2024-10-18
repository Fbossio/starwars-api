const axios = require('axios');

const baseUrl = 'https://swapi.py4e.com/api';

const fetchListData = async (resource, mapper) => {    
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

const fetchResourceById = async (resource, id, mapper) => {
    if (!id) {
        throw new Error(`ID is required to fetch ${resource}`);
    }

    const url = `${baseUrl}/${resource}/${id}`;
    
    try {
        const response = await axios.get(url);
        return mapper(response.data);
    } catch (error) {
        throw new Error(`Error fetching ${resource} with ID ${id}: ${error.message}`);
    }
};


module.exports = {
    fetchListData,
    fetchResourceById
};
