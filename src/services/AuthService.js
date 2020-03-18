import BaseService from './BaseService';
import * as AppConstant from '../constants/constants';
import axios from 'axios';
import qs from 'querystring';

class AuthService extends BaseService {
    constructor(props) {
        super(props);
        this.baseURL = AppConstant.API_URL;
        this.requestURL = this.baseURL + '/user/auth';
    }
    
    authenticate(username, password) {
        return new Promise((resolve, reject) => {
            axios({
                method: 'POST',
                url: `${this.requestURL}`,
                data: qs.stringify({
                    username,
                    password
                }),
                headers: {'Content-Type': 'application/x-www-form-urlencoded' }
                })
                .then(function (res) {
                   resolve(res);
                })
                .catch(function (err) {
                    reject(err);
                });
        })
    }

    getCurrentUser() {
        const endpoint = `${this.baseURL}/users/me`;

        return this.get(endpoint);
    }
}

export default new AuthService();