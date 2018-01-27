const PORT = 4000;

const express = require('express');
const cors = require('cors');

const graphqlHTTP = require('express-graphql');
const schema = require('./src/gql/schema');
const rootValue = require('./src/gql/roots');

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
    schema,
    rootValue,
    graphiql: true
}));

app.listen(PORT, () => {
    console.log(`graphql server listening at port ${PORT}`);
});