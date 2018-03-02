import React, { Component } from 'react';
import { connect }  from 'react-redux';

import { fetchUserAction } from './ducks/user';

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUser: () => dispatch(fetchUserAction())
    }
}

class Login extends Component {

    fetchUser = () => {
        console.log('fetch user clicked');
        this.props.fetchUser();
    }

    render() {
        return (
            <button onClick={this.fetchUser} > Fetch User </button>
        )
    }
}

export default connect(null, mapDispatchToProps)(Login);
