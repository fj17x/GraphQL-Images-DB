export const authQuery = {
  me: (_, __, { dataSources }) => {
    return dataSources.AppAPI.me()
  },
}
