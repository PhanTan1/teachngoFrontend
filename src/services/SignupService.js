import { client } from './Client'


class SignupService {
  async registerNewUser(values) {
    const response = await client.post(``, values).then(result => {

      return result
    })

    return response
  }
}

export default new SignupService();