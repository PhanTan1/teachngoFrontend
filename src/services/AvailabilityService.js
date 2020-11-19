import { Restaurant } from '@material-ui/icons';
import {client} from './Client'


class AvailabilityService {
    getAvailabilities(teacherId,callback) {
        client.get(`availabilities/${teacherId}`).then(result => {
            console.log(result)

            callback({data:result.data, currentDate:new Date('2020-12-31')})
        })
    }
}

export default new AvailabilityService();