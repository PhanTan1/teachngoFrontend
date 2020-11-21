import { client } from './Client'


class SignupService {
  async registerNewStudent(values) {
    const response = await client.post(`students`, values).then(result => {

      return result
    })

    return response
  }

  async registerNewTeacher(values) {
    const response = await client.post(``, values).then(result => {

      return result
    })

    return response
  }
}

export default new SignupService();