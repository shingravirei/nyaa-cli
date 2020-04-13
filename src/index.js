#!/usr/bin/env node
const { fetchAnimes } = require('./api');
const { insertRow, printTable } = require('./table-options');
const { readLine } = require('./readline');
const { openMagnet } = require('./torrent');

const main = async () => {
    try {
        const result = await fetchAnimes();

        insertRow(result);

        printTable();

        const index = readLine(result.length);

        await openMagnet(result, index);

        process.exit(0);
    } catch (err) {
        console.log(err.message);
        process.exit(1);
    }
};

main();
