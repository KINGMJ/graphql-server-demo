const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Query {
    books: [Book]
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
