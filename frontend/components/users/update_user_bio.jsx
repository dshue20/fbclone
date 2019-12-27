import React from 'react';
import CreatePostFormContainer from '../posts/create_post_form_container';

export default class UpdateUserBio extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        //this.updateBio = this.updateBio.bind(this);
    }

    updateBio(){
        return e => this.setState({['bio']: e.currentTarget.value});
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateUser(this.state);
    }
    
    render(){
        //debugger;
        return (
            <form onSubmit={this.handleSubmit} id="user-bio-form">
                <textarea className="user-bio-text" onChange={this.updateBio()} cols="30" rows="10" value={this.props.user.bio}/>
                <button type="submit">Edit</button>
            </form>
        )
    }
}