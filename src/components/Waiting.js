import React, { Component } from 'react';
import { Modal, Spinner } from 'react-bootstrap';

export default class Waiting extends Component {
  render() {
    return (
      <>
        <Modal style={{}} show={true} dialogClassName="modal-90w">
          <Modal.Body>
            <Spinner animation="border" />
          </Modal.Body>
        </Modal>
      </>
    )
  }
}
