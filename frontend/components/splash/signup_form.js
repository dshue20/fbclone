import React from 'react';
import { connect } from 'react-redux';
import SignupForm from './login_form';
import {signup} from '../../actions/session_actions';

const mapStateToProps = state => ({
    errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
    signup: user => dispatch(signup(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);