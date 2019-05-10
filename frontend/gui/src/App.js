import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BaseRouter from './routes';
import {connect} from 'react-redux';
import 'antd/dist/antd.css';
import * as actions from './store/actions/auth'
import CustomLayout from './containers/Layout';

class App extends Component {

  componentDidMount(){
    this.props.onTryAutoSignup()
  }

  render() {
    return (
      <div className="App">
        <Router>
          <CustomLayout {...this.props}>
            <BaseRouter />
          </CustomLayout>
        </Router>
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchtoProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  };
}

export default connect(mapStateToProps, mapDispatchtoProps)(App);
