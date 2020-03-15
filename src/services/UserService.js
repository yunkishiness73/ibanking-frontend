import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';

class UserService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/user';
    }
    
    getCurrentUserInfo(username) {
        return this.get(`${this.requestURL}/${username}`);
    }
}

export default new UserService();