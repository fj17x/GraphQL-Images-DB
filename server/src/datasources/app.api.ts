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

  me() {
    return this.get(`me`)
  }

  signin(credentials) {
    return this.post("login", credentials)
  }

  register(userInfo) {
    return this.post("register", userInfo)
  }
}

export default AppAPI
