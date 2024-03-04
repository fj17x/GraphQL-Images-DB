const resolvers = {
  Query: {
    users: (_, __, { dataSources }) => {
      return dataSources.AppAPI.users()
    },
    user: (_, { id }, { dataSources }) => {
      return dataSources.AppAPI.user(id)
    },
  },
}

export default resolvers
