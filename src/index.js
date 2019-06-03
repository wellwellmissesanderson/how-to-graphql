const { GraphQLServer } = require('graphql-yoga')
const { links } = require('./mock-data')


// 1
const typeDefs = `
  type Query {
    info: String!
    feed: [Link!]!
  }

  type Link {
    id: ID!
    description: String!
    url: String!
  }
`

// 2
const resolvers = {
  Query: {
    info: () => 'The rain in spain...',
    feed: () => links
  },

  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url
  }
}

// 3
const server = new GraphQLServer({
  typeDefs,
  resolvers,
})
server.start(() => console.log(`Server is running on http://localhost:4000`))
