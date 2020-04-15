const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    authors:[Author!]!
    author(id:Int!):Author!
  }

  type Author{
     id:Int
     name:String
  }
`;

module.exports = typeDefs;
