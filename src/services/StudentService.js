import axios from 'axios'

const STUDENTS_REST_API_URL = 'http://localhost:8080/api/students';

class StudentService {
    getStudents(callback) {
        axios.get(STUDENTS_REST_API_URL).then(result => {
            console.log(result)

            callback(result.data)
        })
    }
}

export default new StudentService();