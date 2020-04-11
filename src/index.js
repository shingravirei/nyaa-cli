#!/usr/bin/env node
const { si } = require('nyaapi');
const { program } = require('commander');
const open = require('open');
const readlineSync = require('readline-sync');
const chalk = require('chalk');
const categories = require('./categories');
const { table } = require('table');

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

const searchTerm = program.searchTerm;
const category = program.category;
const n = program.numberOfResults;

(async () => {
    try {
        const result = await si.search(searchTerm, n, {
            category: categories[category],
        });

        if (result.length === 0) {
            throw Error('No torrent found');
        }

        const data = [
            [
                chalk.blue('i'),
                chalk.white('name'),
                chalk.yellow('size'),
                chalk.green('↑'),
                chalk.red('↓'),
            ],
        ];

        config = {
            columns: {
                1: {
                    width: 75,
                },
            },
        };

        result.forEach((torrent, index) => {
            const row = [];

            row.push(chalk.blue(`${index}`));
            row.push(chalk.white(`${torrent.name}`));
            row.push(chalk.yellow(`${torrent.fileSize}`));
            row.push(chalk.green(`${torrent.seeders}`));
            row.push(chalk.red(`${torrent.leechers}`));

            data.push(row);
        });

        console.log();
        console.log(table(data, config));

        const index = readlineSync.question(
            chalk.green('Which one you want to download? ')
        );

        if (index == '') process.exit(0);

        if (index > result.length - 1) {
            console.log('index out of range');
            process.exit(1);
        }

        const torrent = result[index];

        await open(torrent.links.magnet);
        process.exit(0);
    } catch (err) {
        if (err.message === 'no torrent found') {
            console.log(err.message);
            process.exit(0);
        } else {
            console.log(err.message);
            process.exit(1);
        }
    }
})();
