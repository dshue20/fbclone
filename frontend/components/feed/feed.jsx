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
                </header>
                <h1>This is the feed</h1>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    };
};