import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Label from './Label';
import Content from './Content';
import { connect } from 'react-redux';
import * as actions from '../actions/fee';

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

  showOrHideModal = () => {
    return this.props.showModal;
  }

  handleInputChange = (e) => {
    const target = e.target;
    const key = target.name;
    const value = target.value;
    
    this.setState({ [key]: value });
  }

  payTuitionFee = () => {
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    let tuitionFee = this.props.tuitionFee;

    if (userInfo && tuitionFee) {
      this.props.payTuitionFee({
        studentId: tuitionFee.student_id,
        email: userInfo.email
      });
    }
  }

  render() {
    console.log('showModal');
    console.log(this.props.showModal);
    console.log(this.state);
    let userInfo = JSON.parse(localStorage.getItem('userInfo'));
    return (
      <>
        <Modal show={this.showOrHideModal()} dialogClassName="modal-90w">
        <Modal.Header>
          <h3>Thông Tin Giao Dịch</h3>
        </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-sm-5">
                <Label label="Tên khách hàng" />
                <Label label="Loại dịch vụ" />
                <Label label="Mã SV" />
                <Label label="Tên SV" />
                <Label label="Số tiền thanh toán" />
              </div>
              <div className="col-sm-7">
                <Content>{userInfo ? userInfo.full_name : ''}</Content>
                <Content>Học phí</Content>
    <Content>{this.props.tuitionFee ? this.props.tuitionFee.student_id : ''}</Content>
                <Content>{this.props.tuitionFee ? this.props.tuitionFee.student_name : ''}</Content>
                <Content>{this.props.tuitionFee ? this.props.tuitionFee.tuition : ''}</Content>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.props.hideModal}>
              Quay Lại
          </Button>
            <Button variant="danger" onClick={() => this.payTuitionFee()} >
              Thanh Toán
          </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    hideModal: () => dispatch(actions.hidePaymentInfo()),
    payTuitionFee: (paymentInfo) => dispatch(actions.payTuitionFee(paymentInfo))
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showModal: state.fee.showModal,
    tuitionFee: state.fee.tuitionFee
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalBox);
