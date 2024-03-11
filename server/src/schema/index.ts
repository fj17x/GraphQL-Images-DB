import { gql } from "graphql-tag"
import { userTypeDefs, userQuery, userMutation } from "./User"
import { imageTypeDefs, imageQuery, imageMutation } from "./Image"
import { authTypeDefs, authQuery, authMutation } from "./Auth"

export const typeDefs = gql`
  type Query
  type Mutation
  ${userTypeDefs}
  ${imageTypeDefs}
  ${authTypeDefs}
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
