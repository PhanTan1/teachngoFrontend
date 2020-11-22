import { visitor } from './Client'

class AuthenticationService {
  async login(username, password) {
    const response = await visitor.post(`authenticate`,
      { username, password }
    )
      .then(result => {

        return result.data
      })
    return response
  }
}

export default new AuthenticationService();