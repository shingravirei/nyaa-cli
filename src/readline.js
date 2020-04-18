const readlineSync = require('readline-sync');
const chalk = require('chalk');

const readLine = () => {
    const input = readlineSync.question(
        chalk.green('Which one you want to download? ')
    );

    if (input == '') process.exit(0);

    // if (index > animesLength - 1) {
    //     console.log('index out of range');
    //     process.exit(1);
    // }

    // if (index.length > 1) {
    //     index = index.split(' ').map((i) => Number(i));

    //     return index;
    // }

    const indexList = input.split(' ').map((i) => Number(i));

    return indexList;
};

module.exports = {
    readLine,
};
