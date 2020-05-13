import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import languages from './languages';


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
        this.demoLogin = this.demoLogin.bind(this);
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

    demoLogin(){
        const user = Object.assign({}, {email: "bulbasaur@pokemon.com", password: "razorleaf"});
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
            gender: this.state.gender,
            authoredPostIds: []
        });
        //debugger;
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
        if (this.props.errors.length == 0){
            return <ul></ul>
        } else if (this.props.errors.length == 1){
            return (
                <ul className="login-errors">
                    {Object.keys(this.props.errors).map(
                        (error, idx) => <li key={idx}>{this.props.errors[error]}</li>)}
                </ul>
            )
        } else {
            return (
                <ul id="long-login-errors">
                    {Object.keys(this.props.errors).map(
                        (error, idx) => (
                            <li key={idx}>
                                {this.props.errors[error]}
                                <br></br>
                            </li>
                        ))}
                </ul>
            )
        }     
        // return (<ul></ul>)
      }

    render() {
        const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return (
            <div>
                <header id="login-header">
                    <h3 id="login-logo">fakebook</h3>
                    <form id="login-form" onSubmit={this.handleLogin}>
                        <label className="login-input-label">
                            Email or Phone
                            <input className="login-input" type="text" onChange={this.update('email')}/> 
                        </label>

                        <label className="login-input-label">
                            Password
                            <input className="login-input" type="password" onChange={this.update('password')}/>
                        </label>
                        
                        <button className="login-button" type="submit">Log In</button>
                    </form>
                    {/* <form onSubmit={this.props.login(Object.assign({}, {email: "bulbasaur@pokemon.com", password: "razorleaf"}))}>
                        <button className="login-button" type="submit"> Demo Log In</button>
                    </form> */}
                    <button className="login-button" onClick={this.demoLogin}> Demo Log In</button>
                </header>

                

                <section id="login-light-blue">

                    <div>
                        {this.renderErrors()}
                    </div>

                    <section id="login-body">
                        <section id="login-left">
                            <div id="login-description">
                                <h2>Connect with friends and the </h2>
                                <h2>world around you on Fakebook.</h2>
                            </div>
                            
                            <section id="login-left-icons">
                                <div className="login-left-icon-section">
                                    <img className="login-left-icon" src={window.see_photos}></img>
                                    <div className="login-left-icon-text">
                                        <span className="login-left-text-dark">See photos and updates </span><span className="login-left-text-light">from friends in News Feed.</span>
                                    </div>
                                </div>

                                <div className="login-left-icon-section">
                                    <img className="login-left-icon" src={window.share}></img>
                                    <div className="login-left-icon-text">
                                        <span className="login-left-text-dark">Share what's new </span><span className="login-left-text-light">in your life on your Timeline.</span>
                                    </div>
                                </div>

                                <div className="login-left-icon-section">
                                <img id="find-more" className="login-left-icon" src={window.find_more}></img>
                                    <div className="login-left-icon-text">
                                        <span className="login-left-text-dark">Find more </span><span className="login-left-text-light">of what you're looking for with Facebook Search.</span>
                                    </div>
                                </div>
                            </section>
                        </section>
                        
                        <form id="signup-form" onSubmit={this.handleSignup}>
                            <h1 id="signup">Sign Up</h1>
                            <p id="quick-easy">It's quick and easy.</p>
                            <input type="text" className="signup-name-input-text" onChange={this.update('fname')} placeholder="First name"/>
                            <input type="text" className="signup-name-input-text" onChange={this.update('lname')} placeholder="Last name"/>
                            <br/>
                            <input type="text" className="signup-input-other-text" onChange={this.update('email')} placeholder="Mobile number or email"/>
                            <br/>
                            <input type="password" className="signup-input-other-text" onChange={this.update('password')} placeholder="New password"/>
                            <br/>

                            <label className="signup-bday-gender">
                                <p>Birthday</p>
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
                            <br/>

                            <label className="signup-bday-gender">
                                <p>Gender</p>
                                <section id="signup-gender-options">
                                    <div className="gender-plus-text">
                                        <input type="radio" className="signup-gender-option" name="gender" value="Female" onChange={this.update('gender')}/>Female
                                    </div>
                                    <div className="gender-plus-text">
                                        <input type="radio" className="signup-gender-option" name="gender" value="Male" onChange={this.update('gender')}/>Male
                                    </div>
                                    <div className="gender-plus-text">
                                        <input type="radio" className="signup-gender-option" name="gender" value="Custom" onChange={this.update('gender')}/>Custom
                                    </div>
                                </section>
                            </label>
                            <br/>

                            <button id="signup-submit" type="submit">Sign Up</button>
                        </form>
                    </section>
                </section>

                {/* <div id="signup-languages">
                    {languages}
                </div> */}

                {/* <section className="signup-bottom-links">
                    <a className="signup-bottom-link" href="#">I</a>
                    <a className="signup-bottom-link" href="#">Don't</a>
                    <a className="signup-bottom-link" href="#">Know</a>
                    <a className="signup-bottom-link" href="#">What</a>
                    <a className="signup-bottom-link" href="#">To</a>
                    <a className="signup-bottom-link" href="#">Do</a>
                    <a className="signup-bottom-link" href="#">With</a>
                    <a className="signup-bottom-link" href="#">All</a>
                    <a className="signup-bottom-link" href="#">These</a>
                    <a className="signup-bottom-link" href="#">Random</a>
                    <a className="signup-bottom-link" href="#">Links</a>
                    <a className="signup-bottom-link" href="#">That</a>
                    <a className="signup-bottom-link" href="#">Go</a>
                    <a className="signup-bottom-link" href="#">On</a>
                    <a className="signup-bottom-link" href="#">The</a>
                    <a className="signup-bottom-link" href="#">Bottom</a>
                    <a className="signup-bottom-link" href="#">Of</a>
                    <a className="signup-bottom-link" href="#">The</a>
                    <a className="signup-bottom-link" href="#">Facebook</a>
                    <a className="signup-bottom-link" href="#">Page</a>
                </section> */}
            </div>
        )
    }
};