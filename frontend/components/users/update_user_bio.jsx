import React from 'react';

export default class UpdateUserBio extends React.Component {
    constructor(props){
        super(props);
        this.state = this.props.user;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.updateBio = this.updateBio.bind(this);
        this.renderValue = this.renderValue.bind(this);
    }

    componentDidUpdate(prevProps){
        if (prevProps.user != this.props.user){
            this.setState(this.props.user);
        };
    }

    updateBio(){
        return e => {
            this.setState({bio: e.currentTarget.value})
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.updateUser(this.state);
    }

    renderValue(){
        if (this.props.user === this.props.current_user){
            return (
                <form onSubmit={this.handleSubmit} id="user-bio-form">
                    <textarea className="user-bio-text" onChange={this.updateBio()} cols="30" rows="10" value={this.state.bio || ""}/>
                    <button type="submit">Edit</button>
                </form>
            )
        } else {
            return (
                <form onSubmit={this.handleSubmit} id="user-bio-form">
                    <textarea readonly className="user-bio-text" onChange={this.updateBio()} cols="30" rows="10" value={this.state.bio || ""}/>
                </form>
            )
        }
    }
    
    render(){
        //debugger;
        return (
            this.renderValue()
        )
    }
}