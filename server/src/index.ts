import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import typeDefs from "./schema"
import resolvers from "./resolvers"
import AppAPI from "./datasources/app.api"

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers })
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      return {
        dataSources: {
          AppAPI: new AppAPI(),
        },
      }
    },
    listen: { port: 5000 },
  })

  console.log(`GraphQL server running at: ${url}`)
}

startApolloServer()
