// the schema file had 3 responsibilities:
// 1. define types eg booktype
// 2. define relationships between types
// 3. defining root queries ie how to tell the client the starting point from which to start querying

const graphql = require("graphql");

const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

// defines a type of object called book, with fields id, name and genre
const BookType = new GraphQLObjectType({
  name: "Book",
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    genre: { type: GraphQLString }
  })
});

// RootQuery defines how we initially jump into the graph
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        // code to get data from db or other source
      }
    }
  }
});

module.exports = new GraphQLSchema({
  query: RootQuery
});
