export const userResolvers = {
  images: async ({ id }, __, { dataSources }) => {
    id = Number(id)
    const response = await dataSources.AppAPI.images()
    return response.data.filter((image) => image.ownerId === id)
  },
}
