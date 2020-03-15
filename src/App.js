import React, { Component } from 'react';
import ModalBox from './components/ModalBox';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


class App extends Component {
  
  isAuthenticated = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return (
         <Redirect to="/login" />
      );
    } else {
      return (
        <Route 
          key='dashboard'
          exact={true}
          path='/'
          component={DashBoard}
        />
      )
    }
  }

  render() {
    console.log('render app');
    return (
      <Router>
        {this.isAuthenticated()}
        <Route key='login' exact={true} path='/login' component={Login}/>
      </ Router>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAuthenticated: state.auth.isAuthenticated
  }
}

export default connect(mapStateToProps, null)(App);
