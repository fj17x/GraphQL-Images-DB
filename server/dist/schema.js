"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_tag_1 = __importDefault(require("graphql-tag"));
const typeDefs = (0, graphql_tag_1.default) `
  type Query {
    "Get all the users"
    users: [User!]
    "Get a specific user by id"
    user(id: Int!): User
    "Get all the images"
    images: [Image!]
    "Get a specific image"
    image(id: Int!): Image
    "Get your details"
    me: meResponse
  }

  type Mutation {
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
    "Create an image"
    createImage(imageDetails: createImageInput!): CreateImageResponse!
    "Delete an image"
    deleteImage(idToUpdate: Int!): MessageResponse!
    "Update an image (For admin)"
    updateImage(imageDetails: UpdateImageInput!): UpdateResponse!
    "Partially update an image (For admin)"
    partiallyUpdateImage(imageDetails: PartialUpdateImageInput!): UpdateResponse!
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

  input createImageInput {
    url: String!
    title: String!
    description: String
    tags: [String!]
  }

  input UpdateImageInput {
    idToUpdate: Int!
    id: Int!
    url: String!
    title: String!
    createdAt: String!
    updatedAt: String!
    isFlagged: Boolean
    ownerId: Int
    description: String
    tags: [String]
  }

  input PartialUpdateImageInput {
    idToUpdate: Int!
    id: Int
    url: String
    title: String
    createdAt: String
    updatedAt: String
    isFlagged: Boolean
    ownerId: Int
    description: String
    tags: [String]
  }

  input UpdateMe {
    userName: String
    password: String
  }

  type meResponse {
    message: String!
    data: MeDetails!
    links: [HATEOSLink!]!
  }

  type CreateImageResponse {
    message: String!
    imageId: Int!
    links: [HATEOSLink!]!
  }

  type UpdateResponse {
    message: String!
    links: [HATEOSLink!]!
  }

  type MessageResponse {
    message: String!
  }

  type RegisterResponse {
    message: String!
    userId: Int!
    links: [HATEOSLink!]!
  }

  type SigninResponse {
    message: String!
    jwtToken: String!
    links: [HATEOSLink!]!
  }

  type LogoutResponse {
    message: String!
  }

  type HATEOSLink {
    rel: String!
    method: String!
    href: String!
    description: String!
  }

  "An Image uploaded by a user"
  type Image {
    "The image's id"
    id: Int!
    "The image's url"
    url: String!
    "The image's title"
    title: String!
    "The image's description"
    description: String
    "The id of the owner"
    ownerId: Int
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

  type MeDetails {
    id: Int!
    userName: String!
    isAdmin: Boolean
    createdAt: String!
    updatedAt: String!
    destroyTime: String
    imagesUploaded: [Int!]
  }
`;
exports.default = typeDefs;
