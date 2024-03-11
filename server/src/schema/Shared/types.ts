import { gql } from "graphql-tag"

export const sharedTypeDefs = gql`
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
`
