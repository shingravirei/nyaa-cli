const open = require('open');

const openMagnet = async (animes, indexList) => {
    for (let i = 0; i < indexList.length; i++) {
        if (indexList[i] > animes.length - 1) {
            console.log('Index out of range.');

            process.exit(1);
        }

        const torrent = animes[indexList[i]];

        await open(torrent.links.magnet);
    }
};

module.exports = {
    openMagnet,
};
