import { ApolloServer } from "@apollo/server"
import { expressMiddleware } from "@apollo/server/express4"
import AppAPI from "./datasources/api.js"
import { typeDefs, resolvers } from "./schema/index.js"
import http from "http"
import express from "express"
import cors from "cors"

const app = express()
const PORT = 4001

const httpServer = http.createServer(app).listen(PORT, () => {
  const addressInfo = httpServer.address()
  let origin = ""
  if (typeof addressInfo === "string") {
    origin = `http://localhost:${PORT}/graphql`
  } else {
    if (addressInfo.address === "::") {
      origin = `http://localhost:${addressInfo.port}/graphql`
    } else {
      origin = `http://${addressInfo.address}:${addressInfo.port}/graphql`
    }
  }
  console.log(`Server running at: ${origin}`)
})

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

await server.start()

app.use(
  "/graphql",
  cors(),
  express.json(),
  expressMiddleware(server, {
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
  })
)
