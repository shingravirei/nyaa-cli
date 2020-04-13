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
        row.push(chalk.yellow(`${torrent.fileSize}`));
        row.push(chalk.green(`${torrent.seeders}`));
        row.push(chalk.red(`${torrent.leechers}`));

        data.push(row);
    });
};

const printTable = () => {
    console.log();
    console.log(table(data, config));
};

module.exports = {
    insertRow,
    printTable,
};
