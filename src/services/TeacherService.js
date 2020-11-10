import axios from 'axios'

const TEACHERS_REST_API_URL = 'http://localhost:8080/api/teachers';

class TeacherService {
    getTeachers(callback) {
        axios.get(TEACHERS_REST_API_URL).then(result => {
            console.log(result)


            callback(result.data)
        })
    }
}


export default new TeacherService();