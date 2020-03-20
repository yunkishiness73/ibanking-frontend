import { SHOW_MODAL, HIDE_MODAL } from "../constants/constants"
import FeeService from '../services/FeeService'
import { PAYMENT_INFO, PAYMENT_INFO_SUCCESS, OTP_NUMBER, SHOW_SPINNER, HIDE_SPINNER } from "../constants/fee"
import UserService from '../services/UserService';

export const fetchOTPNumberSuccess = () => {
    return {
        type: OTP_NUMBER
    }
}

export const fetchOTPNumber = (email) => {
    return dispatch => {
        return FeeService.getOTPNumber(email)
            .then(res => {
                if (res.status === 200) {
                    dispatch(fetchOTPNumberSuccess())
                    alert('OTP sent to your email !');
                }
            })
            .catch(err => {

            });
    }
}

export const showPaymentInfo = () => {
    return {
        type: SHOW_MODAL
    }
}

export const hidePaymentInfo = () => {
    return {
        type: HIDE_MODAL
    }
}

export const paymentInfo = (paymentInfo) => {
    return {
        type: PAYMENT_INFO,
        paymentInfo
    }
}

export const paymentInfoSuccess = (tuitionFee) => {
    return {
        type: PAYMENT_INFO_SUCCESS,
        tuitionFee
    }
}

export const fetchTuitionFeeByStudentId = (paymentInfo) => {
    return (dispatch, getState) => {
        const { studentId } = paymentInfo;
        FeeService.fetchTuitionFeeByStudentId(studentId)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data);
                    dispatch(paymentInfoSuccess(res.data));
                }
            })
            .catch(err => {
                console.log(err);
            })
    }
}

export const payTuitionFee = (paymentInfo) => {
    return (dispatch, getState) => {
        FeeService.payTuitionFee(paymentInfo)
            .then(res => {
                if (res.status === 200) {
                    const userInfo = JSON.parse(localStorage.getItem('userInfo'));

                    if (userInfo) return UserService.getCurrentUserInfo(userInfo.username);
                }
    
            })
            .then(response => {
                if (response.status === 200) {
                    console.log(response.data);
                    localStorage.setItem('userInfo', JSON.stringify(response.data));
                    alert('Thanh toán thành công ');
                    document.location = 'http://localhost:3000/';
                }
            })
            .catch(err => {
                alert(err.data.error);
            })
    }
}

export const showSpinner = () => {
    return {
        type: SHOW_SPINNER
    }
}

export const hideSpinner = () => {
    return {
        type: HIDE_SPINNER
    }
}