const spotify = require('./spotify');

const rootValue = {
    spotify,
    hello: () => 'Hello World!',
    randomPercent: () => Math.random() * 100,
    myAge: () => 25,
    trumpRocks: () => false,
    anID: () => 'sdf91riuehd8',
    aCoupleStuff: () => ({ 
        me: () => 'David', 
        babs: () => 'Mie'
    }),
};

module.exports = rootValue;