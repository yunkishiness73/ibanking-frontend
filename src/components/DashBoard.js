import React, { Component } from 'react';
import Input from './Input';
import SubmitBtn from './SubmitBtn';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';

class DashBoard extends Component {
    logOut = () => {
        console.log('log out');
        this.props.logOut();
    }

    render() {
        return (
            <div className="container contact-form">
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
                            <Input label="Tên Khách Hàng" inputName="txtName" value="" disable="true" />
                            <Input label="Email" inputName="txtEmail" value="" disable="true" />
                            <Input label="Số Điện Thoại" inputName="txtPhone" value="" disable="true" />
                        </div>
                        <div className="col-md-6">
                            <Input label="Mã SV" inputName="txtStudentID" value="" />
                            <Input label="Họ Tên Sinh Viên" inputName="txtStudentName" value="" disable="true" />
                            <Input label="Số Tiền" inputName="txtTuitionFee" value="" disable="true" />
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
      
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DashBoard);