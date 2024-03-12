export const authMutation = {
  signin: async (_, args, { dataSources, res }) => {
    const signInResponse = await dataSources.AppAPI.signin(args)
    res.cookie("jwt", signInResponse.jwtToken, {
      httpOnly: true,
      sameSite: "Strict",
    })
    return signInResponse
  },
  register: (_, args, { dataSources }) => {
    return dataSources.AppAPI.register(args)
  },
  logout: (_, __, { dataSources }) => {
    return dataSources.AppAPI.logout()
  },
  updateAccountDetails: (_, { detailsToUpdate }, { dataSources }) => {
    return dataSources.AppAPI.updateAccountDetails(detailsToUpdate)
  },
  deleteAccount: (_, __, { dataSources }) => {
    return dataSources.AppAPI.deleteAccount()
  },
}
