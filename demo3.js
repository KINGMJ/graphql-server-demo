const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./schema/schema2')
const resolvers = require('./resolver/resolver2')

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
    console.log('Now browse to http://localhost:4000' + server.graphqlPath)
);