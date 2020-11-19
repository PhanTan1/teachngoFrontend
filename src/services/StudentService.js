import {client} from './Client'

class StudentService {
    getStudents(callback) {
        client.get('students').then(result => {
            console.log(result)

            callback(result.data)
        })
    }
}

export default new StudentService();