import { client } from './Client'

class AuthenticationService {
  async login(username, password) {
    const response = await client.post(`login`,
      { username, password }
    )
      .then(result => {

        return result.data
      })
    return response
  }
}

export default new AuthenticationService();