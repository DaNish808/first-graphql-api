const { buildSchema } = require('graphql');


const schema = buildSchema(`
    interface Thing {
        type: String
    },
    input Person {
        firstName: String,
        lastName: String
    }
    type Pair {
        me: String,
        babs: String
    }
    type Spotify {
        albums(q:String): String,
    }
    type Query {
        spotify: Spotify,
        hello: String,
        randomPercent: Float,
        myAge: Int,
        trumpRocks: Boolean,
        anID: ID,
        aCoupleStuff: Pair
    }
`);


module.exports = schema;