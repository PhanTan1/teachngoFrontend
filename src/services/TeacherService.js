import axios from 'axios'

const TEACHERS_REST_API_URL = 'http://localhost:8080/api/teachers';

class TeacherService {

    getTeachers(){
        return axios.get(TEACHERS_REST_API_URL);
    }
}

export default new TeacherService();