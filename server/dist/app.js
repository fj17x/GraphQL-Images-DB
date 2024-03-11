"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const express4_1 = require("@apollo/server/express4");
const api_1 = __importDefault(require("./datasources/api"));
const index_1 = require("./schema/index");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
async function startServer() {
    const app = (0, express_1.default)();
    const server = new server_1.ApolloServer({
        typeDefs: index_1.typeDefs,
        resolvers: index_1.resolvers,
    });
    await server.start();
    app.use("/graphql", (0, cors_1.default)(), express_1.default.json(), (0, express4_1.expressMiddleware)(server, {
        context: async ({ req }) => {
            const { cache } = server;
            let token = "";
            if (req.headers.cookie) {
                const jwtCookie = req.headers.cookie
                    .split(";")
                    .map((cookie) => cookie.trim())
                    .find((cookie) => cookie.startsWith("jwt="));
                token = jwtCookie ? jwtCookie.split("=")[1] : "";
            }
            return {
                dataSources: {
                    AppAPI: new api_1.default({ cache, token }),
                },
            };
        },
    }));
}
startServer();
