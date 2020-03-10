import React, { Component } from 'react';

class Input extends Component {
    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.inputName}>{this.props.label}</label>
                <input type="text" id={this.props.inputName} name={this.props.inputName} className="form-control" value={this.props.value} disabled={this.props.disable ? true : false} />
            </div>
        );
    }
}

export default Input;
