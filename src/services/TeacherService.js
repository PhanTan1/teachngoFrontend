import {visitor} from './Client'


class TeacherService {
    async getTeachers() {
        const result = await visitor.get('api/teachers').then(res => {
            console.log (res)
            const {data} = res
           return data
        })
        return result
    }

    async getTeachersByCategory(cat) {
        const result = await visitor.get(`api/courses/bycategory/${cat}`)
        .then(res => {
            const {data} = res
            return data
        })

        return result
    }
}


export default new TeacherService();