import { ApolloServer } from "@apollo/server"
import { startStandaloneServer } from "@apollo/server/standalone"
import AppAPI from "./datasources/api"
import { typeDefs, resolvers } from "./schema/index"

async function startApolloServer() {
  const server = new ApolloServer({ typeDefs, resolvers })
  const { url } = await startStandaloneServer(server, {
    context: async ({ req }) => {
      const { cache } = server
      let token = ""
      if (req.headers.cookie) {
        const jwtCookie = req.headers.cookie
          .split(";")
          .map((cookie) => cookie.trim())
          .find((cookie) => cookie.startsWith("jwt="))
        token = jwtCookie ? jwtCookie.split("=")[1] : ""
      }

      return {
        dataSources: {
          AppAPI: new AppAPI({ cache, token }),
        },
      }
    },
    listen: { port: 4001 },
  })

  console.log(`GraphQL server running at: ${url}`)
}

startApolloServer()
