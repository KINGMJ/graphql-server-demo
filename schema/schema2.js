const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    getBooks:[Book]
    getAuthors:[Author]
  }

  type Book{
      title:String
      author:Author
  }

  type Author{
      name:String
      type:String
  }
`;

module.exports = typeDefs;
