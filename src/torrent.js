const open = require('open');

const openMagnet = async (animes, index) => {
    if (typeof index === 'object') {
        for (i in index) {
            const torrent = animes[i];

            await open(torrent.links.magnet);
        }
    } else {
        const torrent = animes[index];

        await open(torrent.links.magnet);
    }
};

module.exports = {
    openMagnet,
};
