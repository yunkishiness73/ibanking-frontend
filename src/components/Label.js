import React, { Component } from 'react';

class Label extends Component {
  render() {
    return (
      <div style={{ textAlign: 'right', fontWeight: 'bold', padding: '10px 0px' }}>{this.props.label}</div>
    );
  }
}


export default Label;
