#!/usr/bin/env node
const { fetchAnimes } = require('./api');
const { insertRow, printTable } = require('./table-options');
const { readLine } = require('./readline');
const { openMagnet } = require('./torrent');

const main = async () => {
    try {
        process.stdout.write('searching...\r');

        const animes = await fetchAnimes();

        insertRow(animes);

        printTable();

        const indexList = readLine();

        await openMagnet(animes, indexList);

        process.exit(0);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

main();
