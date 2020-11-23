import { visitor } from './Client'


class SignupService {
  async registerNewStudent(values) {
    const response = await visitor.post(`students`, values).then(result => {

      return result
    })

    return response
  }

  async registerNewTeacher(values) {
    const response = await visitor.post(`teachers`, values).then(result => {

      return result
    })

    return response
  }
}

export default new SignupService();