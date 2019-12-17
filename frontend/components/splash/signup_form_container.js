import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './signup_form';
import {login, signup} from '../../actions/session_actions';

const mapStateToProps = state => ({
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    login: user => dispatch(login(user)),
    signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);