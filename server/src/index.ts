import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import typeDefs from "./schema"
import resolvers from "./resolvers"
import AppAPI from "./datasources/api"

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers })
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      return {
        dataSources: {
          AppAPI: new AppAPI(),
        },
      }
    },
    listen: { port: 4001 },
  })

  console.log(`GraphQL server running at: ${url}`)
}

startApolloServer()
