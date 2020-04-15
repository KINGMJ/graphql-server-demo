const express = require('express')
const { ApolloServer } = require('apollo-server-express')

const typeDefs = require('./schema/schema1')
const resolvers = require('./resolver/resolver1')

const server = new ApolloServer({ typeDefs, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port: 4001 }, () =>
    console.log('Now browse to http://localhost:4001' + server.graphqlPath)
);