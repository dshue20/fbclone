import React from 'react';
import { Link, Redirect } from 'react-router-dom';


export default class LoginForm extends React.Component {
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
        const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return (
            <div>
                {this.renderErrors()}

                <form onSubmit={this.handleSubmit}>
                    <h1>Sign Up</h1>
                    <p>It's quick and easy.</p>
                    <input type="text" onChange={this.update('fname')} placeholder="First name"/>
                    <input type="text" onChange={this.update('lname')} placeholder="Last name"/>
                    <input type="text" onChange={this.update('email')} placeholder="Mobile number or email"/>
                    <input type="text" onChange={this.update('password')} placeholder="New password"/>
                    
                    <label>
                        Birthday:
                        <select>
                            {MONTHS.map(month => 
                                <option value={month} onChange={this.update('month')}>{month}</option>)}
                        </select>
                        <select>
                            {[...Array(32).keys()].slice(1).map(
                                day => <option value={day} onChange={this.update('day')}>{day}</option>)}
                        </select>
                        <select>
                            {[...Array(2020).keys()].slice(1905).map(
                                day => <option value={year} onChange={this.update('year')}>{day}</option>)}
                        </select>
                    </label>

                    <label>
                        Gender: 
                        <input type="radio" name="gender" value="Male" onChange={this.update('gender')} checked />
                        <input type="radio" name="gender" value="Female" onChange={this.update('gender')}/>
                        <input type="radio" name="gender" value="Custom" onChange={this.update('gender')}/>
                    </label>

                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
};