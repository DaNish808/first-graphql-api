require('dotenv').config();
const fetch = require('node-fetch');

const clientId = process.env.SPOTIFY_ID || null;
const secret = process.env.SPOTIFY_SECRET || null;

const searchUrl = 'https://api.spotify.com/v1/search';

// this was obtained using the Authorization Code flow example at https://developer.spotify.com/web-api/authorization-guide/#authorization-code-flow
// as a temporary measure in lieu of a true user login feature
const tempAuthToken = 'BQB35ETF9m0Q6EbVJ-LHbBcz0koOhErdHlK-YlA0aoEbdQt4ymSshRw4TfKBiY6zujkLUrU3M7GrelM5TLWz53slU-dqIhvstahkgZpMHZXqJRBcXY75_-vSSH9FVdWdEwaJRZAt9-ePvb6FQpNUgKrPTAtyb5Q';

async function spotify() {
    return {
        albums
    };
}

async function albums({ q }) {
    const data = await fetch(
        `${searchUrl}?type=album&q=${q}`, 
        {
        method: 'GET',
        headers: {
            Authorization: 'Bearer ' + tempAuthToken,
            'Content-Type': 'application/json'
        }
    });
    const { albums } = await data.json();
    console.log(albums.href) 
    return albums.href;

}


module.exports = spotify;