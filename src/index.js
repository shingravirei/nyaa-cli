#!/usr/bin/env node
const { fetchAnimes } = require('./api');
const { insertRow, printTable } = require('./table-options');
const { readLine } = require('./readline');
const { openMagnet } = require('./torrent');

const main = async () => {
    try {
        // console.log('searching...\r');
        process.stdout.write('searching...\r');

        const result = await fetchAnimes();

        insertRow(result);

        printTable();

        const indexList = readLine();

        await openMagnet(result, indexList);

        process.exit(0);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

main();
