const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');
const app = express();
const schema = buildSchema(`
    type Query {
        hello: String
        student: Student
    }
    type Student {
        name: String
        course: String
    }
`);
const root = {
    hello: () => 'Hello from GraphQL!',
    student: () => ({
        name: 'Student',
        course: 'Node.js'
    })
};
app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => {
    console.log('GraphQL server running at http://localhost:4000/graphql');
});

