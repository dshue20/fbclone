import React from 'react';
import { Link, Redirect } from 'react-router-dom';


export default class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fname: "",
            lname: "",
            email: "",
            password: "",
            birthday: "",
            gender: "",
            month: "",
            day: "",
            year: ""
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
    }

    handleLogin(e) {
        e.preventDefault();
        const user = Object.assign({}, {email: this.state.email, password: this.state.password});
        this.props.login(user);
        if (!this.props.errors) {
            this.props.history.push("/");
        }
    }

    handleSignup(e) {
        e.preventDefault();
        const user = Object.assign({}, {
            fname: this.state.fname,
            lname: this.state.lname,
            email: this.state.email,
            password: this.state.password,
            birthday: this.state.month + ' ' + this.state.day + ', ' + this.state.year,
            gender: this.state.gender
        });
        debugger;
        this.props.signup(user);
        if (!this.props.errors) {
            this.props.history.push("/");
        }
    }

    update(property) {
        return e => {
            this.setState({
                [property]: e.currentTarget.value
            })
            //debugger;
        }
    }

    renderErrors() {
        return(
          <ul>
            {Object.keys(this.props.errors).map(
                (error, idx) => <li key={idx}>{this.props.errors[error]}</li>)}
          </ul>
        );
      }

    render() {
        const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return (
            <div>
                <header id="login-header">
                    <img id="login-logo" src="facebook_logo.png"/>
                    <form id="login-form" onSubmit={this.handleLogin}>
                        <label className="login-input-label">
                            Email or Phone
                            <input className="login-input" type="text" onChange={this.update('email')}/> 
                        </label>

                        <label className="login-input-label">
                            Password
                            <input className="login-input" type="text" onChange={this.update('password')}/>
                        </label>
                        
                        <button id="login-button" type="submit">Log In</button>
                    </form>
                </header>

                {this.renderErrors()}

                <h2 id="welcome-description">Connect with friends and the world around you on Fakebook.</h2>

                <form onSubmit={this.handleSignup}>
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                    <input type="text" onChange={this.update('fname')} placeholder="First name"/>
                    <input type="text" onChange={this.update('lname')} placeholder="Last name"/>
                    <input type="text" onChange={this.update('email')} placeholder="Mobile number or email"/>
                    <input type="text" onChange={this.update('password')} placeholder="New password"/>
                    
                    <label>
                        Birthday:
                        <select onChange={this.update('month')}>
                            {MONTHS.map(month => 
                                <option key={month} value={month}>{month}</option>)}
                        </select>
                        <select onChange={this.update('day')}>
                            {[...Array(32).keys()].slice(1).map(
                                day => <option key={day} value={day}>{day}</option>)}
                        </select>
                        <select onChange={this.update('year')}>
                            {[...Array(2020).keys()].slice(1905).map(
                                year => <option key={year} value={year}>{year}</option>)}
                        </select>
                    </label>

                    <label>
                        Gender: 
                        Female<input type="radio" name="gender" value="Female" onChange={this.update('gender')}/>
                        Male<input type="radio" name="gender" value="Male" onChange={this.update('gender')}/>
                        Custom<input type="radio" name="gender" value="Custom" onChange={this.update('gender')}/>
                    </label>

                    <input type="submit" value="Sign Up"/>
                </form>
            </div>
        )
    }
};