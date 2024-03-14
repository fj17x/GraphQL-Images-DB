export const imageResolvers = {
  user: async ({ ownerId }, _, { dataSources }) => {
    const response = await dataSources.AppAPI.user(ownerId)
    return response.data
  },
}
