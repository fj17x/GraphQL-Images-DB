import { gql } from "graphql-tag"

export const imageTypeDefs = gql`
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

  extend type Query {
    "Get a specific image"
    image(id: String!): ImageResponse
    "Get all the images"
    images: ImagesResponse
  }

  extend type Mutation {
    "Create an image"
    createImage(imageDetails: createImageInput!): CreateImageResponse!
    "Delete an image"
    deleteImage(idToUpdate: Int!): MessageResponse!
    "Update an image"
    updateImage(imageDetails: UpdateImageInput!): UpdateResponse!
    "Partially update an image "
    partiallyUpdateImage(imageDetails: PartialUpdateImageInput!): UpdateResponse!
    "Delete all your images"
    deleteAllImages: DeleteAllImagesResponse!
  }

  input ImageQueryInput {
    limit: Int
    offset: Int
    sortBy: String
    sortOrder: String
    showDeleted: Boolean
    showFlagged: Boolean
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

  type ImagesResponse {
    message: String!
    fetched: Int!
    data: [Image!]
    links: [[HATEOSLink!]]
    totalImages: Int!
    totalNeededImages: Int!
  }

  type ImageResponse {
    message: String!
    data: Image!
    links: [HATEOSLink!]
  }

  type CreateImageResponse {
    message: String!
    imageId: Int!
    links: [HATEOSLink!]!
  }

  type DeleteAllImagesResponse {
    message: String!
    deletedCount: Int!
  }
`
