import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/fee';
import _ from 'lodash';

class SubmitBtn extends Component {
    showPaymentInfo = (e) => {
        e.preventDefault();

        console.log(this.props.paymentInfo)
        const paymentInfo = this.props.paymentInfo;
        
        console.log(paymentInfo);
        if (!_.isEmpty(paymentInfo) && paymentInfo.studentId) 
            this.props.showPaymentInfo(paymentInfo);
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
        showPaymentInfo: (paymentInfo) => dispatch(actions.showPaymentInfo(paymentInfo)),
        fetchTuitionFeeByStudentId: (paymentInfo) => dispatch(actions.fetchTuitionFeeByStudentId(paymentInfo))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        paymentInfo: state.fee.paymentInfo
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SubmitBtn);
