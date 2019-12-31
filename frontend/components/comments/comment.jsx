import React from 'react';
import {Link} from 'react-router-dom';

const Comment = props => {
    return (
        <div className="comment-div">
            <Link to={`/users/${props.user.id}`} className="post-author">{props.user.fname + ' ' + props.user.lname}</Link>
            <p className="comment-body">{props.comment.body}</p>
        </div>
    )
};

export default Comment;