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
    type Query {
        spotify(query:[String]): String,
        hello: String,
        randomPercent: Float,
        myAge: Int,
        trumpRocks: Boolean,
        anID: ID,
        aCoupleStuff: Pair
    }
`);


module.exports = schema;