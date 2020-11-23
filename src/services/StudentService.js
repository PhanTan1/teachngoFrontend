import { visitor } from './Client'

class StudentService {
    getStudents(callback) {
        visitor.get('students').then(result => {
            console.log(result)

            callback(result.data)
        })
    }

    async getStudentById(id) {
        const response = await visitor.get(`api/student/${id}`)
            .then(res => {
                console.log(res)
                const { data } = res
                return data
            })
        return response
    }
}

export default new StudentService();