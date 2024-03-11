export const imageMutation = {
  partiallyUpdateUser: (_, { userDetails }, { dataSources }) => {
    return dataSources.AppAPI.partiallyUpdateUser(userDetails)
  },
  createImage: (_, { imageDetails }, { dataSources }) => {
    return dataSources.AppAPI.createImage(imageDetails)
  },
  deleteImage: (_, { idToUpdate }, { dataSources }) => {
    return dataSources.AppAPI.deleteImage(idToUpdate)
  },
  updateImage: (_, { imageDetails }, { dataSources }) => {
    return dataSources.AppAPI.updateImage(imageDetails)
  },
  partiallyUpdateImage: (_, { imageDetails }, { dataSources }) => {
    return dataSources.AppAPI.partiallyUpdateImage(imageDetails)
  },
}
