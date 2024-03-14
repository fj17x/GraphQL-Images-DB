export const userMutation = {
  createUser: (_, args, { dataSources }) => {
    return dataSources.AppAPI.createUser(args)
  },
  deleteUser: (_, { idToUpdate }, { dataSources }) => {
    return dataSources.AppAPI.deleteUser(idToUpdate)
  },
  updateUser: (_, { userDetails }, { dataSources }) => {
    return dataSources.AppAPI.updateUser(userDetails)
  },
  partiallyUpdateUser: (_, { userDetails }, { dataSources }) => {
    return dataSources.AppAPI.partiallyUpdateUser(userDetails)
  },
}
