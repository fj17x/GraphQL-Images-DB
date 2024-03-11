import { gql } from "graphql-tag"

export const userTypeDefs = gql`
  "A user who has registered"
  type User {
    "The user's id"
    id: Int!
    "The user's username"
    userName: String!
    "Whether the user is an admin"
    isAdmin: Boolean
    "When the user was created"
    createdAt: String!
    "When the user was last modified"
    updatedAt: String!
    "Whether the user has been deleted"
    destroyTime: String
  }

  extend type Query {
    "Get a specific user by id"
    user: UserResponse
    "Get all the users"
    users: UsersResponse
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
    "Create a user (For admin)"
    createUser(userName: String!, password: String!): RegisterResponse!
    "Delete a user (For admin)"
    deleteUser(idToUpdate: Int!): MessageResponse!
    "Update a user (For admin)"
    updateUser(userDetails: UpdateUserInput!): UpdateResponse!
    "Partially update a user (For admin)"
    partiallyUpdateUser(userDetails: PartialUpdateUserInput!): UpdateResponse!
    "Update account details"
    updateAccountDetails(detailsToUpdate: UpdateMe!): UpdateResponse
    "Delete account"
    deleteAccount: MessageResponse!
  }

  input UpdateUserInput {
    idToUpdate: Int!
    id: Int!
    userName: String!
    isAdmin: Boolean
    password: String!
    createdAt: String!
    updatedAt: String!
    destroyTime: String
  }

  input PartialUpdateUserInput {
    idToUpdate: Int!
    id: Int
    userName: String
    isAdmin: Boolean
    password: String
    createdAt: String
    updatedAt: String
    destroyTime: String
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

  type UsersResponse {
    message: String!
    fetched: Int!
    data: [User!]
    links: [[HATEOSLink!]]
    totalUsers: Int!
    totalNeededUsers: Int!
  }

  type UserResponse {
    message: String!
    data: User!
    links: [HATEOSLink!]
  }

  type meResponse {
    message: String!
    data: MeDetails!
    links: [HATEOSLink!]!
  }

  type RegisterResponse {
    message: String!
    userId: Int!
    links: [HATEOSLink!]!
  }

  type UpdateResponse {
    message: String!
    links: [HATEOSLink!]!
  }

  type LogoutResponse {
    message: String!
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
