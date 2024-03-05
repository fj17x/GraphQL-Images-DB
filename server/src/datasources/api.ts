import { RESTDataSource } from "@apollo/datasource-rest"

class AppAPI extends RESTDataSource {
  baseURL = "http://localhost:4000/v1/"

  users() {
    return this.get("users")
  }

  user(id: number) {
    return this.get(`users/${id}`)
  }

  images() {
    return this.get(`images`)
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
    return this.put(`users/${userDetails.idToUpdate}`, { body: userDetails })
  }

  partiallyUpdateUser(userDetails) {
    return this.patch(`users/${userDetails.idToUpdate}`, { body: userDetails })
  }

  createImage(imageDetails) {
    return this.post(`images`, { body: imageDetails })
  }

  deleteImage(idToUpdate: number) {
    return this.delete(`images/${idToUpdate}`)
  }

  updateImage(imageDetails) {
    return this.put(`images/${imageDetails.idToUpdate}`, { body: imageDetails })
  }

  partiallyUpdateImage(imageDetails) {
    return this.patch(`images/${imageDetails.idToUpdate}`, { body: imageDetails })
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
