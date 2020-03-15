import {
    AUTH_LOGOUT,
    AUTH_SUCCESS
} from '../constants/auth';
import { AlertType, StatusCode } from '../constants/constants';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';

export const authSuccess = (token) => {
    localStorage.setItem('token', JSON.stringify(token));

    return {
        type: AUTH_SUCCESS,
        token
    }
}

export const auth = (username, password) => {
    return dispatch => {
        let token = '';
        return AuthService.authenticate(username, password)
            .then(res => {
                if (res.status === StatusCode.SUCCESS) {
                    token = res.data.token;
                    console.log(token);
                    
                    AuthService.setHeader('Authorization', token);

                    return UserService.getCurrentUserInfo(username);
                }
            })
            .then(response => {
                if (response.status === StatusCode.SUCCESS) {
                    console.log(response.data);
                    localStorage.setItem('userInfo', JSON.stringify(response.data));
                    dispatch(authSuccess(token));
                }
            })
            .catch(err => {
                console.log(err);
                //dispatch(alert.showAlert(AlertType.FAIL, 'Username or Password is in correct. Please check again !'));
            })
    }
}

export const logOut = () => {
    localStorage.removeItem('token');

    return {
        type: AUTH_LOGOUT
    }
}
