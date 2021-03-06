const chalk = require('chalk');
const { table } = require('table');

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

const insertRow = (result) => {
    result.forEach((torrent, index) => {
        const row = [];

        row.push(chalk.blue(`${index}`));
        row.push(chalk.white(`${torrent.name}`));
        row.push(chalk.yellow(`${torrent.filesize}`));
        row.push(chalk.green(`${torrent.seeders}`));
        row.push(chalk.red(`${torrent.leechers}`));

        data.push(row);
    });
};

const printTable = () => {
    process.stdout.write(table(data, config));
    console.log();
};

module.exports = {
    insertRow,
    printTable,
};
