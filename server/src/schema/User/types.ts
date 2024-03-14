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
    "Images a user has uploaded"
    images: [Image!]
  }

  extend type Query {
    "Get a specific user by id"
    user(id: Int!): UserResponse
    "Get all the users"
    users(query: UsersQueryInput): UsersResponse
  }

  extend type Mutation {
    "Create a user (For admin)"
    createUser(userName: String!, password: String!): RegisterResponse!
    "Delete a user (For admin)"
    deleteUser(idToUpdate: Int!): MessageResponse!
    "Update a user (For admin)"
    updateUser(userDetails: UpdateUserInput!): UpdateResponse!
    "Partially update a user (For admin)"
    partiallyUpdateUser(userDetails: PartialUpdateUserInput!): UpdateResponse!
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

  input UsersQueryInput {
    limit: Int
    offset: Int
    sortBy: String
    sortOrder: String
    showDeleted: Boolean
    searchQuery: String
    searchColumn: String
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

  type RegisterResponse {
    message: String!
    userId: Int!
    links: [HATEOSLink!]!
  }
`
