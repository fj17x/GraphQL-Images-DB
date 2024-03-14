"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authTypeDefs = void 0;
const graphql_tag_1 = require("graphql-tag");
exports.authTypeDefs = (0, graphql_tag_1.gql) `
  extend type Query {
    "Get your details"
    me: meResponse
  }

  extend type Mutation {
    "Register a user"
    register(userName: String!, password: String!): RegisterResponse!
    "Sign in using username and password"
    signin(userName: String!, password: String!): SigninResponse!
    "Logout"
    logout: LogoutResponse!
    "Update account details"
    updateAccountDetails(detailsToUpdate: UpdateMe!): UpdateResponse
    "Delete account"
    deleteAccount: MessageResponse!
  }

  input UpdateMe {
    userName: String
    password: String
  }

  type MeDetails {
    id: Int!
    userName: String!
    isAdmin: Boolean
    createdAt: String!
    updatedAt: String!
    destroyTime: String
    imagesUploaded: [Int!]
  }

  type SigninResponse {
    message: String!
    jwtToken: String!
    links: [HATEOSLink!]!
  }

  type meResponse {
    message: String!
    data: MeDetails!
    links: [HATEOSLink!]!
  }

  type LogoutResponse {
    message: String!
  }
`;
