const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({ typeDefs, resolvers });

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server is up and running on Port ${PORT}`);
});
