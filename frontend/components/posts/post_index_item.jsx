import React from 'react';
import {Link} from 'react-router-dom';

const PostIndexItem = props => {
   const post_body = (props.post.body.length < 50)?  <p className="post-body-short">{props.post.body}</p> : <p className="post-body-long">{props.post.body}</p>
    return (
        <li key={props.post.id} className="individual-post">
            <Link to={`/users/${props.user.id}`} className="post-author">{props.user.fname + ' ' + props.user.lname}</Link>
            {post_body}
        </li>
    )
};

export default PostIndexItem;