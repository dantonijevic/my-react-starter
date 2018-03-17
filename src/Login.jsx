import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUserAction } from './ducks/user';

const mapDispatchToProps = dispatch => ({
  fetchUser: () => dispatch(fetchUserAction()),
});

const mapStateToProps = state => ({
  user: { ...state.user },
});

class Login extends Component {
  constructor() {
    super();
    console.log('LOGIN: Constructor');
  }

  componentWillMount() {
    console.log('LOGIN: componentWillMount()');
  }

  componentDidMount() {
    console.log('LOGIN: componentDidMount()');
  }

  componentWillReceiveProps() {
    console.log('LOGIN: componentWillReceiveProps()');
  }

  shouldComponentUpdate() {
    console.log('LOGIN: shouldComponentUpdate()');
    return true;
  }

  componentWillUpdate() {
    console.log('LOGIN: componentWillUpdate()');
  }

  componentDidUpdate() {
    console.log('LOGIN: componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('LOGIN: componentWillUnmount()');
  }

  fetchUser = () => {
    console.log('fetch user clicked');
    this.props.fetchUser();
  };

  render() {
    console.log('LOGIN: render()');
    return <button onClick={this.fetchUser}> Fetch User </button>;
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
