import gql from "graphql-tag"

const typeDefs = gql`
  type Query {
    "Get all the users"
    users: [User!]
    "Get a specific user by id"
    user(id: ID!): User
    "Get all the images"
    images: [Image!]
    "Get a specific image"
    image(id: ID!): Image
    "Get your details"
    me: User #Modify response
  }

  type Mutation {
    "Register a user"
    register: [User!]
    "Sign in using username and password"
    signin: User
  }

  "An Image uploaded by a user"
  type Image {
    "The image's id"
    id: ID!
    "The image's url"
    url: String!
    "The image's title"
    title: String!
    "The image's description"
    description: String
    "The id of the owner"
    ownerId: ID
    "The tags related to the image"
    tags: [String]
    "Whether the image is flagged"
    isFlagged: Boolean
    "When the image was created"
    createdAt: String!
    "When the image or its details was last modified"
    updatedAt: String!
    "Whether the image has been deleted"
    destroyTime: String
  }

  "A user who has registered"
  type User {
    "The user's id"
    id: ID!
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
`

export default typeDefs
