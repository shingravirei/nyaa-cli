const { si } = require('nyaapi');
const { searchTerm, category, numberOfResults } = require('./cli-options');
const categories = require('./categories');

const fetchAnimes = async () => {
    const result = await si.search(searchTerm, numberOfResults, {
        category: categories[category],
    });

    if (result.length === 0) {
        console.log('No results found');
        process.exit(0);
    }

    return result;
};

module.exports = { fetchAnimes };
