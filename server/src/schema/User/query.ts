export const userQuery = {
  users: (_, { query }, { dataSources }) => {
    return dataSources.AppAPI.users(query)
  },
  user: (_, { id }, { dataSources }) => {
    return dataSources.AppAPI.user(id)
  },
  me: (_, __, { dataSources }) => {
    return dataSources.AppAPI.me()
  },
}
