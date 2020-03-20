import { SHOW_MODAL, HIDE_MODAL } from "../constants/constants"
import { PAYMENT_INFO, PAYMENT_INFO_SUCCESS, SHOW_SPINNER, HIDE_SPINNER } from "../constants/fee"

const initialState = {
    showModal: false
}

const showModal = (state, action) => {
    return {
        ...state,
        showModal: true
    }
}

const hideModal = (state, action) => {
    return {
        ...state,
        showModal: false
    }
}

const showSpinner = (state, action) => {
    return {
        ...state,
        showSpinner: true
    }
}

const hideSpinner = (state, action) => {
    return {
        ...state,
        showSpinner: false
    }
}

const paymentInfo = (state, action) => {
    return {
        ...state,
        paymentInfo: action.paymentInfo
    }
}

const tuitiolFee = (state, action) => {
    return {
        ...state,
        tuitionFee: action.tuitionFee
    }
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL:
            return showModal(state, action);
        case HIDE_MODAL:
            return hideModal(state, action);
        case PAYMENT_INFO:
            return paymentInfo(state, action);
        case PAYMENT_INFO_SUCCESS:
            return tuitiolFee(state, action);
        case SHOW_SPINNER:
            return showSpinner(state, action);
        case HIDE_SPINNER:
            return hideSpinner(state, action);
        default:
            return state;
    }
}

export default reducer;