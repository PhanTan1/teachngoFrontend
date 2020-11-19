import { client } from './Client'


class SignupService {
  async registerNewUser(values) {
    console.log (values)
    const response = await client.post(`students`, values).then(result => {

      return result
    })

    return response
  }
}

export default new SignupService();