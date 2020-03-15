import { SHOW_MODAL, HIDE_MODAL } from "../constants/constants"
import FeeService from '../services/FeeService'
import { PAYMENT_INFO, PAYMENT_INFO_SUCCESS } from "../constants/fee"

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
                        document.location = 'http://localhost:3000/';
                      }
                  })
                  .catch(err => {
                      console.log(err);
                  })
    }
}