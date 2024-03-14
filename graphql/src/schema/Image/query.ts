export const imageQuery = {
  images: (_, { query }, { dataSources }) => {
    return dataSources.AppAPI.images(query)
  },
  image: (_, { id }, { dataSources }) => {
    return dataSources.AppAPI.image(id)
  },
}
