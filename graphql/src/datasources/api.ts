import { RESTDataSource } from "@apollo/datasource-rest"

class AppAPI extends RESTDataSource {
  baseURL = "http://localhost:4000/v1/"
  private token: string

  constructor(options: { token: string; cache }) {
    super(options)
    this.token = options.token
  }

  willSendRequest(_, request) {
    request.headers.Cookie = `jwt=${this.token}`
  }

  users(query) {
    const queryString = new URLSearchParams(query).toString()
    return this.get(`users?${queryString}`)
  }

  user(id: number) {
    return this.get(`users/${id}`)
  }

  images(query) {
    const queryString = new URLSearchParams(query).toString()
    return this.get(`images?${queryString}`)
  }

  image(id: number) {
    return this.get(`images/${id}`)
  }

  signin(credentials: { userName: string; password: string }) {
    return this.post("auth/signin", { body: credentials })
  }

  register(userInfo: { userName: string; password: string }) {
    return this.post("auth/register", { body: userInfo })
  }

  logout() {
    return this.post("auth/logout")
  }

  createUser(userInfo: { userName: string; password: string }) {
    return this.post("users", { body: userInfo })
  }

  deleteUser(idToUpdate: number) {
    return this.delete(`users/${idToUpdate}`)
  }

  updateUser(userDetails) {
    const { idToUpdate, ...fieldsToUpdate } = userDetails
    return this.put(`users/${userDetails.idToUpdate}`, { body: fieldsToUpdate })
  }

  partiallyUpdateUser(userDetails) {
    const { idToUpdate, ...fieldsToUpdate } = userDetails
    return this.patch(`users/${userDetails.idToUpdate}`, { body: fieldsToUpdate })
  }

  createImage(imageDetails) {
    return this.post(`images`, { body: imageDetails })
  }

  deleteImage(idToUpdate: number) {
    return this.delete(`images/${idToUpdate}`)
  }

  updateImage(imageDetails) {
    const { idToUpdate, ...fieldsToUpdate } = imageDetails
    return this.put(`images/${imageDetails.idToUpdate}`, { body: fieldsToUpdate })
  }

  partiallyUpdateImage(imageDetails) {
    const { idToUpdate, ...fieldsToUpdate } = imageDetails
    return this.patch(`images/${imageDetails.idToUpdate}`, { body: fieldsToUpdate })
  }

  deleteAllImages() {
    return this.delete(`images`)
  }

  me() {
    return this.get(`me`)
  }

  updateAccountDetails(detailsToUpdate) {
    return this.patch(`me`, { body: detailsToUpdate })
  }

  deleteAccount() {
    return this.delete(`me`)
  }
}

export default AppAPI
