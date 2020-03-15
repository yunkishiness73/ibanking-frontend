import React, { Component } from 'react';
import Input from './Input';
import SubmitBtn from './SubmitBtn';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import ModalBox from './ModalBox';

class DashBoard extends Component {
    logOut = () => {
        console.log('log out');
        this.props.logOut();
        document.location = 'http://localhost:3000/';
    }

    render() {
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        console.log(this.props.tuitionFee);
        return (
            <div className="container contact-form">
                <ModalBox />
                <div style={{ textAlign: 'right'}}>
                    <span>Hi, <b>Kiet </b></span> <button className="btn btn-outline-danger" onClick={() => this.logOut()}>Log Out</button>
                </div>
                <div className="contact-image">
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <form method="post">
                    <h3>Thông Tin Hóa Đơn</h3>
                    <div className="row">
                        <div className="col-md-6">
                            <Input label="Tên Khách Hàng" inputName="txtName" value={userInfo.full_name} disable="true" />
                            <Input label="Email" inputName="txtEmail" value={userInfo.email} disable="true" />
                            <Input label="Số Điện Thoại" inputName="txtPhone" value={userInfo.phone_number} disable="true" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Mã SV" name="studentId" inputName="txtStudentID" value={this.props.tuitionFee ? this.props.tuitionFee.student_id : ''} />
                            <Input label="Họ Tên Sinh Viên" inputName="txtStudentName" value={this.props.tuitionFee && this.props.tuitionFee.student_id ? this.props.tuitionFee.student_name : ''} disable="true" />
                            <Input label="Số Tiền" inputName="txtTuitionFee" value={this.props.tuitionFee ? this.props.tuitionFee.tuition : ''} disable="true" />
                            <SubmitBtn />
                      
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        logOut: () => dispatch(actions.logOut())
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
      paymentInfo: state.fee.paymentInfo,
      tuitionFee: state.fee.tuitionFee
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);