const resolvers = {
  Query: {
    users: (_, __, { dataSources }) => {
      return dataSources.AppAPI.users()
    },
    user: (_, { id }, { dataSources }) => {
      return dataSources.AppAPI.user(id)
    },
    images: (_, __, { dataSources }) => {
      return dataSources.AppAPI.images()
    },
    image: (_, { id }, { dataSources }) => {
      return dataSources.AppAPI.image(id)
    },
    me: (_, __, { dataSources }) => {
      return dataSources.AppAPI.me()
    },
  },

  Mutation: {
    signin: (_, args: { userName: string; password: string }, { dataSources }) => {
      return dataSources.AppAPI.signin(args)
    },
    register: (_, args: { userName: string; password: string }, { dataSources }) => {
      return dataSources.AppAPI.register(args)
    },
    logout: (_, __, { dataSources }) => {
      return dataSources.AppAPI.logout()
    },
    createUser: (_, args: { userName: string; password: string }, { dataSources }) => {
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
    updateAccountDetails: (_, { updateAccountDetails }, { dataSources }) => {
      return dataSources.AppAPI.me(updateAccountDetails)
    },
    deleteAccount: (_, __, { dataSources }) => {
      return dataSources.AppAPI.me()
    },
  },
}

export default resolvers
