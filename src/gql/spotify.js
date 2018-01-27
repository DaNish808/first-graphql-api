require('dotenv').config();

const clientId = process.env.SPOTIFY_ID || null;
const secret = process.env.SPOTIFY_SECRET || null;

const searchUrl = 'https://api.spotify.com/v1/search';

function spotify({ query }) {
    console.log(query)
    return query.join('+');
}


module.exports = spotify;