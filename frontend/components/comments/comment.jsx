import React from 'react';
import {Link} from 'react-router-dom';

export default class Comment extends React.Component {
    constructor(props){
        super(props);
    };

    render(){
        return (
            <div className="comment-div">
                <Link to={`/users/${this.props.user.id}`} className="post-author">{this.props.user.fname + ' ' + this.props.user.lname}</Link>
                <p className="comment-body">{this.props.comment.body}</p>
            </div>
        )
    }
};