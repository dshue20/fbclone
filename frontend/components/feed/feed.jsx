import React from 'react';

export default class Feed extends React.Component {
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    };

    handleSubmit(e){
        e.preventDefault();
        //debugger;
        this.props.logout();
    }

    render() {
        return (
            <div>
                <header id="feed-header">
                    <img className="fb-icon" src={window.fb_icon}/>
                    <input className="feed-search" type="text" placeholder=" Search"/>
                    <a href="#"><img className="feed-search-icon" src={window.feed_search}/></a>
                    <section id="right-header">
                        <a href="#" className="right-header-text">Name</a>
                        <a href="#" className="right-header-text">Home</a>
                        <a href="#" className="right-header-text">Create</a>
                        <a href="#"><img className="feed-right-header-icon" src={window.friends_icon}/></a>
                        <a href="#"><img className="feed-right-header-icon" src={window.messenger_icon}/></a>
                        <a href="#"><img className="feed-right-header-icon" src={window.notif_icon}/></a>
                        <a href="#"><img className="feed-right-header-icon" src={window.help_icon}/></a>
                        <a href="#"><img className="feed-right-header-icon" src={window.dropdown_icon}/></a>
                        <button className="login-button" onClick={this.props.logout}>Log Out</button>
                    </section>
                </header>

                <h1>This is the feed</h1>
                <h1>Hi {this.props.user.fname}</h1>
            </div>
        )
    };
};