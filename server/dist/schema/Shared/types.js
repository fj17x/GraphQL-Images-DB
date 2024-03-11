"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sharedTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.sharedTypeDefs = (0, graphql_tag_1.gql) `
  type RegisterResponse {
    message: String!
    userId: Int!
    links: [HATEOSLink!]!
  }

  type UpdateResponse {
    message: String!
    links: [HATEOSLink!]!
  }

  type MessageResponse {
    message: String!
  }

  type HATEOSLink {
    rel: String!
    method: String!
    href: String!
    description: String!
  }
`;
