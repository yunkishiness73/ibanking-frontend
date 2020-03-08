import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Label from './Label';
import Content from './Content';

class ModalBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
  }

  handleShow = () => {
    this.setState({ show: true })
  }

  handleClose = () => {
    this.setState({ show: false })
  }

  render() {
    return (
      <>
        <Modal show={this.props.show} onHide={this.handleClose} dialogClassName="modal-90w">
        <Modal.Header>
          <h3>Thông Tin Giao Dịch</h3>
        </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-5">
                <Label label="Số tài khoản" />
                <Label label="Tên khách hàng" />
                <Label label="Loại dịch vụ" />
                <Label label="Mã SV" />
                <Label label="Tên SV" />
                <Label label="Số tiền thanh toán" />
                <Label label="Số điện thoại nhận mã OTP" />
                <Label label="Mã OTP" />
              </div>
              <div className="col-sm-7">
                <Content>0902209902</Content>
                <Content>Nguyễn Tuấn Kiệt</Content>
                <Content>Học phí</Content>
                <Content>51603170</Content>
                <Content>Nguyễn Lê Quang Huy</Content>
                <Content>700000000</Content>
                <Content>0979589073</Content>
                <Content>
                  <input type="text" placeholder="Nhập mã OTP *" className="form-control" style={{ width: '40%'}}/>
                </Content>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Quay Lại
          </Button>
            <Button variant="danger">
              Thanh Toán
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalBox;
