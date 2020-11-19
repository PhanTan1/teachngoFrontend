import {client} from './Client'


class AvailabilityService {
    getAvailabilities(teacherId,callback) {
        client.get(`availabilities/${teacherId}`).then(result => {

            callback(result.data)
        })
    }
}

export default new AvailabilityService();