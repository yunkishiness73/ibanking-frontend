import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/fee';

class Input extends Component {

    handleInputChange = (e) => {
        console.log(e.ctrlKey);
        const target = e.target;
        const key = target.name;
        const value = target.value;

        if (value) {
            this.props.paymentInfo({ [key]: value })
            this.props.fetchTuitionFeeByStudentId({ [key]: value });
        }
    }

    handleClickEvent = (e) => {
        console.log(e.ctrlKey);
    }

    renderInput = () => {
        if (this.props.disable)
            return <input type="text" id={this.props.inputName} name={this.props.inputName} className="form-control" value={this.props.value} disabled={true} />;

        return <input placeholder={this.props.placeholder} type="text" onChange={(e) => this.handleInputChange(e)} id={this.props.inputName} name={this.props.name} className="form-control" />;
    }

    render() {
        return (
            <div className="form-group">
                <label htmlFor={this.props.inputName}>{this.props.label}</label>
                {this.renderInput()}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      paymentInfo: (paymentInfo) => dispatch(actions.paymentInfo(paymentInfo)),
      fetchTuitionFeeByStudentId: (paymentInfo) => dispatch(actions.fetchTuitionFeeByStudentId(paymentInfo))
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Input);
