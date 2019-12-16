import React from 'react';
import { Link, Redirect } from 'react-router-dom';


export default class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        //debugger;
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = Object.assign({}, this.state);
        this.props.login(user);
        if (!this.props.errors) {
            this.props.history.push("/");
        }
    }

    update(property) {
        return e => this.setState({
            [property]: e.currentTarget.value
        })
    }

    renderErrors() {
        return(
          <ul>
            {Object.keys(this.props.errors).map(error => this.props.errors[error])}
          </ul>
        );
      }

    render() {
        // if (this.props.errors) {
        //     const errors = this.renderErrors();
        // } else {
        //     const errors = <h1>No errors!</h1>
        // };
        return (
            <div>
                {this.renderErrors()}

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email: 
                        <input type="text" onChange={this.update('email')}/> 
                    </label>

                    <label>
                        Password: 
                        <input type="text" onChange={this.update('password')}/>
                    </label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
};