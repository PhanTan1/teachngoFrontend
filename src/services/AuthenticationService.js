import { client } from './Client'

class AuthenticationService {
  async login(login, password) {
    const response = await client.post(`login`,
      { login, password }
    )
      .then(result => {

        return result.data
      })
    return response
  }
}

export default new AuthenticationService();