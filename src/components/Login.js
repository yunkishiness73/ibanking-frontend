import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/auth';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: {},
            errors: {},
            formIsValid: true
        }
    }
    
    onSubmit = (e) => {
        e.preventDefault();

        const username = this.state.auth.username;
        const password = this.state.auth.password;

        let errors = this.handleInputValidation();

        if (!errors.formIsValid) {
            this.setState({ errors });
        } else {
            this.props.onAuth(username, password);
        }
    }

    handleInputValidation = () => {
        const emailPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        const username = this.state.auth.username || '';
        const password = this.state.auth.password || '';
        const errors = {};
        
        let formIsValid = true;

        if (!emailPattern.test(username)) {
            errors['username'] = 'Email is not valid';
            formIsValid = false;
        }

        if (!password) {
            errors['password'] = 'Password is not valid';
            formIsValid = false;
        }

        errors.formIsValid = formIsValid;

        return errors;
    }

    handleInputChange = (e) => {
        const target = e.target;
        const key = target.name;
        const value = target.value;

        this.setState({ auth: { ...this.state.auth, [key]: value } });
    }

    isError = (key) => {
        return this.state.errors[key] ? 'alert-validate' : '';
    }

    render() {
       const token = localStorage.getItem('token');
       
       let authRedirect = null;

       if (this.props.isAuthenticated || token)
        authRedirect = <Redirect to="/" />
        
        return (
            <div className="limiter">
                {authRedirect}
                <div className="container-login100">
                    <div className="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
                        <form className="login100-form validate-form" action="#">
                            <span className="login100-form-title p-b-33">Account Login</span>
                            <div className={"wrap-input100 validate-input " + this.isError('username') } data-validate="Valid email is required: ex@abc.xyz">
                                <input className="input100" type="text" name="username" placeholder="Email" onChange={(e) => this.handleInputChange(e)}/>
                                <span className="focus-input100-1" />
                                <span className="focus-input100-2" />
                            </div>
                            <div className={"wrap-input100 rs1 validate-input " + this.isError('password') } data-validate="Password is required">
                                <input className="input100" type="password" name="password" placeholder="Password" onChange={this.handleInputChange}/>
                                <span className="focus-input100-1" />
                                <span className="focus-input100-2" />
                            </div>
                            <div className="container-login100-form-btn m-t-20">
                                <button onClick={(e) => this.onSubmit(e)} className="login100-form-btn">Sign in</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onAuth: (username, password) => dispatch(actions.auth(username, password))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
