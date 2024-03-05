"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("@apollo/server");
const standalone_1 = require("@apollo/server/standalone");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const api_1 = __importDefault(require("./datasources/api"));
async function startApolloServer() {
    const server = new server_1.ApolloServer({ typeDefs: schema_1.default, resolvers: resolvers_1.default });
    const { url } = await (0, standalone_1.startStandaloneServer)(server, {
        context: async ({ req }) => {
            return {
                dataSources: {
                    AppAPI: new api_1.default(),
                },
            };
        },
        listen: { port: 4001 },
    });
    console.log(`GraphQL server running at: ${url}`);
}
startApolloServer();
