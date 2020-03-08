import React, { Component } from 'react';
import Input from './components/Input';
import SubmitBtn from './components/SubmitBtn';
import ModalBox from './components/ModalBox';


class App extends Component {
  render() {
    return (
      <div className="container contact-form">
        <ModalBox />
        <div className="contact-image">
          <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
        </div>
        <form method="post">
          <h3>Thông Tin Hóa Đơn</h3>
          <div className="row">
            <div className="col-md-6">
              <Input label="Tên Khách Hàng" inputName="txtName" value="" disable="true"/>
              <Input label="Email" inputName="txtEmail" value="" disable="true"/>
              <Input label="Số Điện Thoại" inputName="txtPhone" value="" disable="true"/>
            </div>
            <div className="col-md-6">
              <Input label="Mã SV" inputName="txtStudentID" value=""/>
              <Input label="Họ Tên Sinh Viên" inputName="txtStudentName" value="" disable="true"/>
              <Input label="Số Tiền" inputName="txtTuitionFee" value="" disable="true"/>
              <SubmitBtn />
          </div>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
