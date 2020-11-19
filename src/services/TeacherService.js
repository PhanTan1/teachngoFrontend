import {client} from './Client'


class TeacherService {
    getTeachers(callback) {
        client.get('teachers').then(result => {
            console.log(result)


            callback(result.data)
        })
    }
}


export default new TeacherService();