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
    signin: (_, __, { dataSources }) => {
      return dataSources.AppAPI.signin()
    },
    register: (_, __, { dataSources }) => {
      return dataSources.AppAPI.register()
    },
  },
}

export default resolvers
