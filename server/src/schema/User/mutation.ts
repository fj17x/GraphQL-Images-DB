export const userMutation = {
  signin: (_, args, { dataSources }) => {
    return dataSources.AppAPI.signin(args)
  },
  register: (_, args, { dataSources }) => {
    return dataSources.AppAPI.register(args)
  },
  logout: (_, __, { dataSources }) => {
    return dataSources.AppAPI.logout()
  },
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
  updateAccountDetails: (_, { detailsToUpdate }, { dataSources }) => {
    return dataSources.AppAPI.updateAccountDetails(detailsToUpdate)
  },
  deleteAccount: (_, __, { dataSources }) => {
    return dataSources.AppAPI.deleteAccount()
  },
}
