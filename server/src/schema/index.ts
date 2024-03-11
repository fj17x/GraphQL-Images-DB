import { gql } from "graphql-tag"
import { userTypeDefs, userQuery, userMutation } from "./User"
import { imageTypeDefs, imageQuery, imageMutation } from "./Image"

export const typeDefs = gql`
  type Query
  type Mutation
  ${userTypeDefs}
  ${imageTypeDefs}
`

export const resolvers = {
  Query: {
    ...userQuery,
    ...imageQuery,
  },
  Mutation: {
    ...userMutation,
    ...imageMutation,
  },
}
