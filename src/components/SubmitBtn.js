import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/fee';
import _ from 'lodash';
import FeeService from '../services/FeeService';

class SubmitBtn extends Component {
    showPaymentInfo = (e) => {
        e.preventDefault();
        const tuitionFee = this.props.tuitionFee;

        if (tuitionFee && tuitionFee.student_name && tuitionFee.student_id && tuitionFee.tuition) {
            this.props.showSpinner();

            const userInfo = JSON.parse(localStorage.getItem('userInfo'));

            if (userInfo) {
                return FeeService.getOTPNumber(userInfo.email)
                  .then(res => {
                    if (res.status === 200) {
                        this.props.hideSpinner();
                        this.props.showPaymentInfo();
                        alert('OTP sent to your email !');
                    }
                  }).catch(err => {
                  
                  });
            }
                this.props.fetchOTPNumber(userInfo.email);
        }
    }

    render() {
        return (
            <div className="form-group">
                <input type="submit" name="btnSubmit" className="btnContact" value="Xác Nhận" onClick={(e) => this.showPaymentInfo(e)}/>
            </div>

        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        showPaymentInfo: () => dispatch(actions.showPaymentInfo()),
        fetchTuitionFeeByStudentId: (paymentInfo) => dispatch(actions.fetchTuitionFeeByStudentId(paymentInfo)),
        fetchOTPNumber: (email) => dispatch(actions.fetchOTPNumber(email)),
        showSpinner: () => dispatch(actions.showSpinner()),
        hideSpinner: () => dispatch(actions.hideSpinner())
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        paymentInfo: state.fee.paymentInfo,
        tuitionFee: state.fee.tuitionFee
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitBtn);
