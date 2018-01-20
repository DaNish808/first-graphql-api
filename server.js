const PORT = 4000;

const express = require('express');
const graphqlHTTP = require('express-graphql');
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
        hello: String,
        randomPercent: Float,
        myAge: Int,
        trumpRocks: Boolean,
        anID: ID,
        aCoupleStuff: Pair
    }
`);

const rootValue = {
    hello: () => 'Hello World!',
    randomPercent: () => (Math.random() + 1) * 50,
    myAge: () => 25,
    trumpRocks: () => false,
    anID: () => 'sdf91riuehd8',
    aCoupleStuff: () => ({ 
        me: () => 'David', 
        babs: () => 'Mie'
    })
};


const app = express();

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`graphql server listening at port ${PORT}`);
});