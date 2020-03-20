import React, { Component } from 'react';
import { Modal, Spinner } from 'react-bootstrap';
import { connect } from 'react-redux'

class Waiting extends Component {
  showOrHide = () => {
    return this.props.showSpinner;
  }

  render() {
    return (
      <>
        <Modal style={{}} show={this.showOrHide()} dialogClassName="modal-90w">
          <Modal.Body style={{ textAlign: 'center' }}>
            <Spinner animation="border" style={{ width: '3rem', height: '3rem' }}/>
          </Modal.Body>
        </Modal>
      </>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    showSpinner: state.fee.showSpinner
  }
}

export default connect(mapStateToProps, null)(Waiting);
