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
                <h1>This is the feed</h1>
                <button onClick={this.props.logout}>Log Out</button>
            </div>
        )
    };
};