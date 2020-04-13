const { program } = require('commander');

program.version('0.0.1');

program
    .option('-s, --search-term, <type>', 'the search term')
    .option(
        '-c, --category, <type>',
        'all, anime, anime amv, anime eng, anime non eng',
        'anime eng'
    )
    .option('-n, --number-of-results <type>', 'number of results', 10);

program.parse(process.argv);

if (program.searchTerm === undefined) {
    console.log('provide a search term');
    process.exit(1);
}

module.exports = {
    searchTerm: program.searchTerm,
    category: program.category,
    numberOfResults: program.numberOfResults,
};
