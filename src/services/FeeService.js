import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class Fee extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/fee';
    }
    
    authenticate(username, password) {
        let payload = { username, password };

        return this.post(this.requestURL, payload);
    }

    fetchTuitionFeeByStudentId(studentId) {
        const endpoint = `${this.requestURL}/studentid/${studentId}`;

        return this.get(endpoint);
    }

    payTuitionFee(paymentInfo) {
        return this.get(`${this.baseURL}/transaction/${paymentInfo.studentId}/${paymentInfo.email}`);
    }
}

export default new Fee();