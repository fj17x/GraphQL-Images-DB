"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = exports.typeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
const User_1 = require("./User");
const Image_1 = require("./Image");
const Auth_1 = require("./Auth");
const types_1 = require("./Shared/types");
exports.typeDefs = (0, graphql_tag_1.gql) `
  type Query
  type Mutation
  ${User_1.userTypeDefs}
  ${Image_1.imageTypeDefs}
  ${Auth_1.authTypeDefs}
  ${types_1.sharedTypeDefs}
`;
exports.resolvers = {
    Query: {
        ...User_1.userQuery,
        ...Image_1.imageQuery,
        ...Auth_1.authQuery,
    },
    Mutation: {
        ...User_1.userMutation,
        ...Image_1.imageMutation,
        ...Auth_1.authMutation,
    },
};
