import { gql } from "graphql-tag"
import { userTypeDefs, userQuery, userMutation } from "./User/index.js"
import { imageTypeDefs, imageQuery, imageMutation } from "./Image/index.js"
import { authTypeDefs, authQuery, authMutation } from "./Auth/index.js"
import { sharedTypeDefs } from "./Shared/types.js"

export const typeDefs = gql`
  type Query
  type Mutation
  ${userTypeDefs}
  ${imageTypeDefs}
  ${authTypeDefs}
  ${sharedTypeDefs}
`

export const resolvers = {
  Query: {
    ...userQuery,
    ...imageQuery,
    ...authQuery,
  },
  Mutation: {
    ...userMutation,
    ...imageMutation,
    ...authMutation,
  },
}
